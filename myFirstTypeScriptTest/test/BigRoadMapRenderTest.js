/// <reference path="../bigroadmaprender.ts" />
describe("BigRoadMapRenderTest", function () {
    it("empty input test", function () {
        var bigRoadMapRender = new BigRoadMapRender([]);
        expect(null).toBe(bigRoadMapRender.bigRoadMap);
    });
    it('render first element', function () {
        var bigRoadGrid = new BigRoadGrid([1]);
        var bigRoadMapRender = new BigRoadMapRender([bigRoadGrid]);
        expect([["b"]]).toEqual(bigRoadMapRender.bigRoadMap);
    });
});
//# sourceMappingURL=BigRoadMapRenderTest.js.map