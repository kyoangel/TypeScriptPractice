/// <reference path="../app/bigroadmaprender.ts" />
describe("BigRoadMapRenderTest", function () {
    it("empty input test", function () {
        var bigRoadMapRender = new BigRoadMapRender([]);
        expect(null).toBe(bigRoadMapRender.bigRoadMap);
    });
    it('render first element tie', function () {
        var bigRoadGrid = new BigRoadGrid([3]);
        var bigRoadMapRender = new BigRoadMapRender([bigRoadGrid]);
        expect([[":1", undefined, undefined, undefined, undefined, undefined]]).toEqual(bigRoadMapRender.bigRoadMap);
    });
    it('render first element banker', function () {
        var bigRoadGrid = new BigRoadGrid([1]);
        var bigRoadMapRender = new BigRoadMapRender([bigRoadGrid]);
        expect([["b", undefined, undefined, undefined, undefined, undefined]]).toEqual(bigRoadMapRender.bigRoadMap);
    });
    it('render first element player', function () {
        var bigRoadGrid = new BigRoadGrid([2]);
        var bigRoadMapRender = new BigRoadMapRender([bigRoadGrid]);
        expect([["p", undefined, undefined, undefined, undefined, undefined]]).toEqual(bigRoadMapRender.bigRoadMap);
    });
    it('render two Banker', function () {
        var target = Array();
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        var bigRoadMapRender = new BigRoadMapRender(target);
        expect([["b", "b", undefined, undefined, undefined, undefined]]).toEqual(bigRoadMapRender.bigRoadMap);
    });
    it('render two Player', function () {
        var target = Array();
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        var bigRoadMapRender = new BigRoadMapRender(target);
        expect([["p", "p", undefined, undefined, undefined, undefined]]).toEqual(bigRoadMapRender.bigRoadMap);
    });
    it('render one banker, one Player', function () {
        var target = Array();
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([2]));
        var bigRoadMapRender = new BigRoadMapRender(target);
        expect([["b", undefined, undefined, undefined, undefined, undefined],
            ["p", undefined, undefined, undefined, undefined, undefined]])
            .toEqual(bigRoadMapRender.bigRoadMap);
    });
    it('render one Player then one banker', function () {
        var target = Array();
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([1]));
        var bigRoadMapRender = new BigRoadMapRender(target);
        expect([["p", undefined, undefined, undefined, undefined, undefined],
            ["b", undefined, undefined, undefined, undefined, undefined]])
            .toEqual(bigRoadMapRender.bigRoadMap);
    });
    it('render many player grid', function () {
        var target = Array();
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        var bigRoadMapRender = new BigRoadMapRender(target);
        expect([["p", "p", "p", "p", "p", "p"], [undefined, undefined, undefined, undefined, undefined, "p"]]).toEqual(bigRoadMapRender.bigRoadMap);
    });
    it('render so many player grid', function () {
        var target = Array();
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        var bigRoadMapRender = new BigRoadMapRender(target);
        expect([["p", "p", "p", "p", "p", "p"],
            [undefined, undefined, undefined, undefined, undefined, "p"],
            [undefined, undefined, undefined, undefined, undefined, "p"]]).toEqual(bigRoadMapRender.bigRoadMap);
    });
    it('render so many player grid and append some bankers', function () {
        var target = Array();
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        var bigRoadMapRender = new BigRoadMapRender(target);
        expect([["p", "p", "p", "p", "p", "p"],
            ["b", "b", undefined, undefined, undefined, "p"],
            [undefined, undefined, undefined, undefined, undefined, "p"]]).toEqual(bigRoadMapRender.bigRoadMap);
    });
    it('render two dragon tail case1', function () {
        var target = Array();
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        var bigRoadMapRender = new BigRoadMapRender(target);
        expect([["p", "p", "p", "p", "p", "p"],
            ["b", "b", "b", "b", "b", "p"],
            [undefined, undefined, undefined, undefined, "b", "p"]]).toEqual(bigRoadMapRender.bigRoadMap);
    });
    it('render two dragon tail case2', function () {
        var target = Array();
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        var bigRoadMapRender = new BigRoadMapRender(target);
        expect([["p", "p", "p", "p", "p", "p"],
            ["b", "b", "b", "b", "b", "p"],
            [undefined, undefined, undefined, undefined, "b", "b"]]).toEqual(bigRoadMapRender.bigRoadMap);
    });
    it('render two dragon tail case3', function () {
        var target = Array();
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        var bigRoadMapRender = new BigRoadMapRender(target);
        expect([["p", "p", "p", "p", "p", "p"],
            ["b", "b", "b", "b", "b", "p"],
            [undefined, undefined, undefined, undefined, "b", "b"],
            [undefined, undefined, undefined, undefined, undefined, "b"]]).toEqual(bigRoadMapRender.bigRoadMap);
    });
    it('render three dragon tail case1', function () {
        var target = Array();
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        var bigRoadMapRender = new BigRoadMapRender(target);
        expect([["p", "p", "p", "p", "p", "p"],
            ["b", "b", "b", "b", "b", "p"],
            ["p", "p", "p", "p", "b", "b"],
            [undefined, undefined, undefined, "p", "p", "b"]]).toEqual(bigRoadMapRender.bigRoadMap);
    });
    it('render three dragon tail case2', function () {
        var target = Array();
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        var bigRoadMapRender = new BigRoadMapRender(target);
        expect([["p", "p", "p", "p", "p", "p"],
            ["b", "b", "b", "b", "b", "p"],
            ["p", "p", "p", "p", "b", "b"],
            [undefined, undefined, undefined, "p", "p", "b"],
            [undefined, undefined, undefined, undefined, "p", undefined]]).toEqual(bigRoadMapRender.bigRoadMap);
    });
    it('render mass choas case', function () {
        var target = Array();
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2])); // 14 
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1])); // 12
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2])); // 10
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1])); // 8
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2]));
        target.push(new BigRoadGrid([2])); // 6
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1]));
        target.push(new BigRoadGrid([1])); //10
        var bigRoadMapRender = new BigRoadMapRender(target);
        expect([["p", "p", "p", "p", "p", "p"],
            ["b", "b", "b", "b", "b", "p"],
            ["p", "p", "p", "p", "b", "p"],
            ["b", "b", "b", "p", "b", "p"],
            ["p", "p", "b", "p", "b", "p"],
            ["b", "p", "b", "p", "b", "p"],
            ["b", "p", "b", "p", "b", "p"],
            ["b", "p", "b", "p", "b", "p"],
            ["b", "p", "b", "p", "b", "p"],
            ["b", "b", "b", "b", "b", "b"]]).toEqual(bigRoadMapRender.bigRoadMap);
    });
});
//# sourceMappingURL=BigRoadMapRenderTest.js.map