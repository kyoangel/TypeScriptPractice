/// <reference path="../app/grouping.ts" />
describe("GroupingTest", function () {
    it("empty input test", function () {
        var grouping = new Grouping([]);
        expect(null).toBe(grouping.group());
    });
    it("single input test", function () {
        var grouping = new Grouping([1]);
        expect([[1]]).toEqual(grouping.group());
    });
    it("two role should be apart", function () {
        var grouping = new Grouping([1, 2]);
        expect([[1], [2]]).toEqual(grouping.group());
    });
    it("tie should follow role", function () {
        var grouping = new Grouping([1, 3]);
        expect([[1, 3]]).toEqual(grouping.group());
    });
    it("leading tie should follow role", function () {
        var grouping = new Grouping([3, 1]);
        expect([[3, 1]]).toEqual(grouping.group());
    });
    it("some role list test", function () {
        var grouping = new Grouping([1, 2, 2, 1]);
        expect([[1], [2], [2], [1]]).toEqual(grouping.group());
    });
    it("all tie list test", function () {
        var grouping = new Grouping([3, 3, 3, 3, 3]);
        expect([[3, 3, 3, 3, 3]]).toEqual(grouping.group());
    });
    it("complex tie and role mix part1", function () {
        var grouping = new Grouping([3, 1, 3, 2, 3, 3]);
        expect([[3, 1, 3], [2, 3, 3]]).toEqual(grouping.group());
    });
    it("complex tie and role mix part2", function () {
        var grouping = new Grouping([1, 1, 1, 3, 3, 3, 2, 2, 3, 1, 3]);
        expect([[1], [1], [1, 3, 3, 3], [2], [2, 3], [1, 3]]).toEqual(grouping.group());
    });
    it("3, 7, 11, 15 are all tie", function () {
        var grouping = new Grouping([3, 7, 11, 15, 3]);
        expect([[3, 7, 11, 15, 3]]).toEqual(grouping.group());
    });
    it("Pair element test", function () {
        var grouping = new Grouping([5, 10]);
        expect([[5], [10]]).toEqual(grouping.group());
    });
    it("complex tie and role mix part1 and Pair element test", function () {
        var grouping = new Grouping([11, 5, 7, 10, 15, 3]);
        expect([[11, 5, 7], [10, 15, 3]]).toEqual(grouping.group());
    });
});
//# sourceMappingURL=GroupingTest.js.map