import {
    isConsecutiveDay,
    isSameDay,
    calculateStreak,
    formatStreakText,
} from "@/common/utils/streakUtils";

describe("streakUtils", () => {
    describe("isConsecutiveDay", () => {
        it("should return true for consecutive days", () => {
            const yesterday = new Date("2026-02-14T10:00:00");
            const today = new Date("2026-02-15T14:00:00");
            expect(isConsecutiveDay(yesterday, today)).toBe(true);
        });

        it("should return false for the same day", () => {
            const d1 = new Date("2026-02-15T08:00:00");
            const d2 = new Date("2026-02-15T20:00:00");
            expect(isConsecutiveDay(d1, d2)).toBe(false);
        });

        it("should return false for days with a gap", () => {
            const d1 = new Date("2026-02-13T10:00:00");
            const d2 = new Date("2026-02-15T10:00:00");
            expect(isConsecutiveDay(d1, d2)).toBe(false);
        });

        it("should handle month boundaries", () => {
            const lastDayOfJan = new Date("2026-01-31T23:00:00");
            const firstDayOfFeb = new Date("2026-02-01T06:00:00");
            expect(isConsecutiveDay(lastDayOfJan, firstDayOfFeb)).toBe(true);
        });

        it("should return false when dates are reversed (future to past)", () => {
            const today = new Date("2026-02-15T10:00:00");
            const yesterday = new Date("2026-02-14T10:00:00");
            expect(isConsecutiveDay(today, yesterday)).toBe(false);
        });
    });

    describe("isSameDay", () => {
        it("should return true for the same day with different times", () => {
            const d1 = new Date("2026-02-15T08:00:00");
            const d2 = new Date("2026-02-15T23:59:59");
            expect(isSameDay(d1, d2)).toBe(true);
        });

        it("should return false for different days", () => {
            const d1 = new Date("2026-02-14T23:59:59");
            const d2 = new Date("2026-02-15T00:00:00");
            expect(isSameDay(d1, d2)).toBe(false);
        });

        it("should return true for identical dates", () => {
            const d = new Date("2026-02-15T12:00:00");
            expect(isSameDay(d, d)).toBe(true);
        });

        it("should return false for same day different month", () => {
            const d1 = new Date("2026-01-15T12:00:00");
            const d2 = new Date("2026-02-15T12:00:00");
            expect(isSameDay(d1, d2)).toBe(false);
        });
    });

    describe("calculateStreak", () => {
        beforeEach(() => {
            jest.useFakeTimers();
        });

        afterEach(() => {
            jest.useRealTimers();
        });

        it("should return 1 for first login (null lastLoginDate)", () => {
            expect(calculateStreak(null, 0)).toBe(1);
        });

        it("should maintain streak when logged in today", () => {
            jest.setSystemTime(new Date("2026-02-15T14:00:00"));
            const today = new Date("2026-02-15T08:00:00");
            expect(calculateStreak(today, 5)).toBe(5);
        });

        it("should increment streak for consecutive day login", () => {
            jest.setSystemTime(new Date("2026-02-15T10:00:00"));
            const yesterday = new Date("2026-02-14T10:00:00");
            expect(calculateStreak(yesterday, 3)).toBe(4);
        });

        it("should reset streak when gap in days", () => {
            jest.setSystemTime(new Date("2026-02-15T10:00:00"));
            const twoDaysAgo = new Date("2026-02-13T10:00:00");
            expect(calculateStreak(twoDaysAgo, 10)).toBe(1);
        });
    });

    describe("formatStreakText", () => {
        it('should return "1 day streak" for streak of 1', () => {
            expect(formatStreakText(1)).toBe("1 day streak");
        });

        it('should return "X days streak" for streak > 1', () => {
            expect(formatStreakText(5)).toBe("5 days streak");
        });

        it("should handle 0", () => {
            expect(formatStreakText(0)).toBe("0 days streak");
        });

        it("should handle large numbers", () => {
            expect(formatStreakText(365)).toBe("365 days streak");
        });
    });
});
