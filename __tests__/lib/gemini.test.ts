import { isWord, withRetry, isRateLimitError, extractJson } from "@/lib/gemini";

// Set a fake API key so getGenAI() doesn't throw during tests
process.env.GEMINI_API_KEY = "test-api-key-for-unit-tests";

describe("gemini helpers", () => {
    describe("extractJson", () => {
        it("should extract JSON from clean response", () => {
            const input = '{"type": "word", "meaning": "hello"}';
            const result = extractJson(input);
            expect(JSON.parse(result)).toEqual({ type: "word", meaning: "hello" });
        });

        it("should extract JSON from markdown fences", () => {
            const input = '```json\n{"type": "word"}\n```';
            const result = extractJson(input);
            expect(JSON.parse(result)).toEqual({ type: "word" });
        });

        it("should handle extra text before JSON", () => {
            const input = 'Here is the result:\n{"type": "word", "meaning": "test"}';
            const result = extractJson(input);
            expect(JSON.parse(result)).toEqual({ type: "word", meaning: "test" });
        });

        it("should handle extra text after JSON", () => {
            const input = '{"type": "sentence", "translation": "xin chào"}\nHope this helps!';
            const result = extractJson(input);
            expect(JSON.parse(result)).toEqual({ type: "sentence", translation: "xin chào" });
        });

        it("should handle extra text before AND after JSON", () => {
            const input = 'The analysis:\n{"isCorrect": true, "correction": "ok"}\nLet me know if you need more.';
            const result = extractJson(input);
            expect(JSON.parse(result)).toEqual({ isCorrect: true, correction: "ok" });
        });

        it("should handle nested objects", () => {
            const input = '{"variations": {"formal": "Good day", "friendly": "Hey!"}}';
            const result = extractJson(input);
            expect(JSON.parse(result)).toEqual({
                variations: { formal: "Good day", friendly: "Hey!" },
            });
        });

        it("should handle escaped braces in strings", () => {
            const input = '{"example": "Use \\"{word}\\" in a sentence"}';
            const result = extractJson(input);
            expect(JSON.parse(result)).toHaveProperty("example");
        });

        it("should return raw input when no JSON object found", () => {
            const input = "No JSON here, just text.";
            const result = extractJson(input);
            expect(result).toBe("No JSON here, just text.");
        });
    });
    describe("isWord", () => {
        it("should return true for a single word", () => {
            expect(isWord("hello")).toBe(true);
        });

        it("should return true for a word with trailing spaces", () => {
            expect(isWord("  hello  ")).toBe(true);
        });

        it("should return false for a sentence", () => {
            expect(isWord("hello world")).toBe(false);
        });

        it("should return false for a long string without spaces", () => {
            const longWord = "a".repeat(31);
            expect(isWord(longWord)).toBe(false);
        });

        it("should return true for a 30-character word", () => {
            const word30 = "a".repeat(30);
            expect(isWord(word30)).toBe(true);
        });

        it("should return true for an empty string (trimmed)", () => {
            expect(isWord("")).toBe(true);
        });

        it("should return false for multiple words", () => {
            expect(isWord("I am learning")).toBe(false);
        });

        it("should handle hyphenated words", () => {
            expect(isWord("well-known")).toBe(true);
        });
    });

    describe("isRateLimitError", () => {
        it("should detect 429 errors", () => {
            expect(isRateLimitError(new Error("429 Too Many Requests"))).toBe(true);
        });

        it("should detect quota errors", () => {
            expect(isRateLimitError(new Error("quota exceeded"))).toBe(true);
        });

        it("should detect RESOURCE_EXHAUSTED errors", () => {
            expect(isRateLimitError(new Error("RESOURCE_EXHAUSTED"))).toBe(true);
        });

        it("should detect rate errors", () => {
            expect(isRateLimitError(new Error("rate limit reached"))).toBe(true);
        });

        it("should return false for other errors", () => {
            expect(isRateLimitError(new Error("Invalid JSON response"))).toBe(false);
        });

        it("should handle null/undefined", () => {
            expect(isRateLimitError(null)).toBe(false);
            expect(isRateLimitError(undefined)).toBe(false);
        });
    });

    describe("withRetry", () => {
        it("should return result on first success", async () => {
            const fn = jest.fn().mockResolvedValue("success");
            const result = await withRetry(fn, 2, 10);
            expect(result).toBe("success");
            expect(fn).toHaveBeenCalledTimes(1);
        });

        it("should retry on rate limit error within same model", async () => {
            const fn = jest
                .fn()
                .mockRejectedValueOnce(new Error("429 Too Many Requests"))
                .mockResolvedValue("success");

            const result = await withRetry(fn, 2, 10);
            expect(result).toBe("success");
            expect(fn).toHaveBeenCalledTimes(2);
        });

        it("should fall back to next model after retries exhausted", async () => {
            // Fail twice on first model (exhausting retries), succeed on second model
            const fn = jest
                .fn()
                .mockRejectedValueOnce(new Error("429"))
                .mockRejectedValueOnce(new Error("429"))
                .mockResolvedValue("fallback success");

            const result = await withRetry(fn, 2, 10);
            expect(result).toBe("fallback success");
            // 2 retries on first model + 1 success on second model = 3 calls
            expect(fn).toHaveBeenCalledTimes(3);
        });

        it("should throw immediately on non-rate-limit error", async () => {
            const fn = jest.fn().mockRejectedValue(new Error("some other error"));

            await expect(withRetry(fn, 2, 10)).rejects.toThrow("some other error");
            expect(fn).toHaveBeenCalledTimes(1);
        });

        it("should throw after all models exhausted", async () => {
            // All calls fail with rate limit
            const fn = jest.fn().mockRejectedValue(new Error("429 Rate Limited"));

            // 6 models * 2 retries = 12 calls
            await expect(withRetry(fn, 2, 10)).rejects.toThrow("429 Rate Limited");
            expect(fn).toHaveBeenCalledTimes(12);
        });

        it("should pass a model object to the function", async () => {
            const fn = jest.fn().mockResolvedValue("ok");
            await withRetry(fn, 2, 10);

            // The first argument should be a GenerativeModel object
            const firstArg = fn.mock.calls[0][0];
            expect(firstArg).toBeDefined();
        });
    });
});
