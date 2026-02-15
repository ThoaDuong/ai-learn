import {
    isYesterday,
    getTodayDateString,
    getYesterdayDateString,
    shouldUseFreeze,
} from "@/common/utils/streakFreezeUtils";

describe("streakFreezeUtils", () => {
    beforeEach(() => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date("2026-02-15T12:00:00Z"));
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    describe("isYesterday", () => {
        it("should return true for yesterday's date", () => {
            const yesterday = new Date("2026-02-14T15:00:00Z");
            expect(isYesterday(yesterday)).toBe(true);
        });

        it("should return false for today's date", () => {
            const today = new Date("2026-02-15T08:00:00Z");
            expect(isYesterday(today)).toBe(false);
        });

        it("should return false for two days ago", () => {
            const twoDaysAgo = new Date("2026-02-13T12:00:00Z");
            expect(isYesterday(twoDaysAgo)).toBe(false);
        });

        it("should return false for tomorrow", () => {
            const tomorrow = new Date("2026-02-16T12:00:00Z");
            expect(isYesterday(tomorrow)).toBe(false);
        });
    });

    describe("getTodayDateString", () => {
        it("should return today's date in YYYY-MM-DD format", () => {
            const result = getTodayDateString();
            expect(result).toBe("2026-02-15");
        });
    });

    describe("getYesterdayDateString", () => {
        it("should return yesterday's date in YYYY-MM-DD format", () => {
            const result = getYesterdayDateString();
            expect(result).toBe("2026-02-14");
        });

        it("should handle month boundaries", () => {
            jest.setSystemTime(new Date("2026-03-01T12:00:00Z"));
            expect(getYesterdayDateString()).toBe("2026-02-28");
        });
    });

    describe("shouldUseFreeze", () => {
        it("should return false when lastStreakDate is null", () => {
            expect(shouldUseFreeze(null, 5)).toBe(false);
        });

        it("should return false when freezeCount is 0", () => {
            const yesterday = new Date("2026-02-14T10:00:00Z");
            expect(shouldUseFreeze(yesterday, 0)).toBe(false);
        });

        it("should return false when freezeCount is negative", () => {
            const yesterday = new Date("2026-02-14T10:00:00Z");
            expect(shouldUseFreeze(yesterday, -1)).toBe(false);
        });

        it("should return true when last activity was yesterday and freeze is available", () => {
            const yesterday = new Date("2026-02-14T10:00:00Z");
            expect(shouldUseFreeze(yesterday, 3)).toBe(true);
        });

        it("should return false when last activity was today", () => {
            const today = new Date("2026-02-15T08:00:00Z");
            expect(shouldUseFreeze(today, 5)).toBe(false);
        });

        it("should return false when last activity was more than 1 day ago", () => {
            const twoDaysAgo = new Date("2026-02-13T10:00:00Z");
            expect(shouldUseFreeze(twoDaysAgo, 5)).toBe(false);
        });
    });
});
