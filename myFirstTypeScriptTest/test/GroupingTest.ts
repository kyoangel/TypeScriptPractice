/// <reference path="../grouping.ts" />

describe("GroupingTest", function () {
    it("input_empty_should_return_empty", function () {
        let grouping = new Grouping([]);
        expect(null).toBe(grouping.group());
    });

    it("input 1 should return 1", function () {
        let grouping = new Grouping([1]);
        expect([[1]]).toEqual(grouping.group());
    });

    it("input 12 should_return 1 2", function () {
        let grouping = new Grouping([1, 2]);
        expect([[1], [2]]).toEqual(grouping.group());
    });

    it("input 13 should return 13", function () {
        let grouping = new Grouping([1, 3]);
        expect([[1, 3]]).toEqual(grouping.group());
    });

    it("input 31 should return 31", function () {
        let grouping = new Grouping([3, 1]);
        expect([[3, 1]]).toEqual(grouping.group());
    });

    it("input 1221 should return 1 2 2 1", function () {
        let grouping = new Grouping([1,2,2,1]);
        expect([[1], [2], [2], [1]]).toEqual(grouping.group());
    });

    it("input 33333 should return 33333", function () {
        let grouping = new Grouping([3, 3,3,3,3]);
        expect([[3,3,3,3,3]]).toEqual(grouping.group());
    });

    it("input 313233 should return 313 233", function () {
        let grouping = new Grouping([3, 1, 3, 2, 3, 3]);
        expect([[3, 1, 3], [2, 3, 3]]).toEqual(grouping.group());
    });

    it("input 11133322313 should return 1 1 1333 2 23 13", function () {
        let grouping = new Grouping([1, 1, 1, 3, 3, 3, 2, 2, 3, 1, 3]);
        expect([[1], [1], [1, 3, 3, 3], [2], [2, 3], [1, 3]]).toEqual(grouping.group());
    });
});