import {
    getTodayDateString,
    getYesterdayDateString,
    getDateStringDaysAgo,
    calculateMissedDays,
} from "@/common/utils/streakFreezeUtils";

describe("streakFreezeUtils", () => {
    beforeEach(() => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date("2026-02-15T12:00:00Z"));
    });

    afterEach(() => {
        jest.useRealTimers();
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

    describe("getDateStringDaysAgo", () => {
        it("should return 0 days ago as today", () => {
            expect(getDateStringDaysAgo(0)).toBe("2026-02-15");
        });

        it("should return 1 day ago as yesterday", () => {
            expect(getDateStringDaysAgo(1)).toBe("2026-02-14");
        });

        it("should return 5 days ago", () => {
            expect(getDateStringDaysAgo(5)).toBe("2026-02-10");
        });
    });

    describe("calculateMissedDays", () => {
        it("should return 0 when lastStreakDate is null", () => {
            expect(calculateMissedDays(null)).toBe(0);
        });

        it("should return 0 when last activity was today", () => {
            const today = new Date("2026-02-15T08:00:00Z");
            expect(calculateMissedDays(today)).toBe(0);
        });

        it("should return 0 when last activity was yesterday (no gap yet)", () => {
            const yesterday = new Date("2026-02-14T10:00:00Z");
            expect(calculateMissedDays(yesterday)).toBe(0);
        });

        it("should return 1 when last activity was 2 days ago (missed 1 day)", () => {
            const twoDaysAgo = new Date("2026-02-13T10:00:00Z");
            expect(calculateMissedDays(twoDaysAgo)).toBe(1);
        });

        it("should return 3 when last activity was 4 days ago (missed 3 days)", () => {
            const fourDaysAgo = new Date("2026-02-11T10:00:00Z");
            expect(calculateMissedDays(fourDaysAgo)).toBe(3);
        });

        it("should return 7 when last activity was 8 days ago (missed 7 days)", () => {
            const eightDaysAgo = new Date("2026-02-07T10:00:00Z");
            expect(calculateMissedDays(eightDaysAgo)).toBe(7);
        });
    });
});
