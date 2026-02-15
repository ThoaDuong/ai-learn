import { getRadianAngle, rotateSize } from "@/common/utils/imageUtils";

describe("imageUtils", () => {
    describe("getRadianAngle", () => {
        it("should return 0 for 0 degrees", () => {
            expect(getRadianAngle(0)).toBe(0);
        });

        it("should return PI for 180 degrees", () => {
            expect(getRadianAngle(180)).toBeCloseTo(Math.PI);
        });

        it("should return PI/2 for 90 degrees", () => {
            expect(getRadianAngle(90)).toBeCloseTo(Math.PI / 2);
        });

        it("should return 2*PI for 360 degrees", () => {
            expect(getRadianAngle(360)).toBeCloseTo(2 * Math.PI);
        });

        it("should handle negative angles", () => {
            expect(getRadianAngle(-90)).toBeCloseTo(-Math.PI / 2);
        });
    });

    describe("rotateSize", () => {
        it("should return same dimensions for 0 rotation", () => {
            const result = rotateSize(100, 50, 0);
            expect(result.width).toBeCloseTo(100);
            expect(result.height).toBeCloseTo(50);
        });

        it("should swap dimensions for 90 degree rotation", () => {
            const result = rotateSize(100, 50, 90);
            expect(result.width).toBeCloseTo(50);
            expect(result.height).toBeCloseTo(100);
        });

        it("should return same dimensions for 180 degree rotation", () => {
            const result = rotateSize(100, 50, 180);
            expect(result.width).toBeCloseTo(100);
            expect(result.height).toBeCloseTo(50);
        });

        it("should handle square dimensions", () => {
            const result = rotateSize(100, 100, 45);
            // For a square rotated 45°, both dimensions should be equal
            expect(result.width).toBeCloseTo(result.height);
        });

        it("should return positive dimensions", () => {
            const result = rotateSize(200, 100, 37);
            expect(result.width).toBeGreaterThan(0);
            expect(result.height).toBeGreaterThan(0);
        });
    });
});
