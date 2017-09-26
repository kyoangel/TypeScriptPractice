/// <reference path="grouping.ts" />
/// <reference path="bigroadgrid.ts" />
var BigRoadMapRender = /** @class */ (function () {
    function BigRoadMapRender(grid) {
        if (grid.length === 0) {
            this.bigRoadMap = null;
            return;
        }
        this.bigRoadMap = new Array();
        if (grid[0].role === "banker") {
            this.bigRoadMap.push(["b"]);
        }
    }
    return BigRoadMapRender;
}());
//# sourceMappingURL=BigRoadMapRender.js.map