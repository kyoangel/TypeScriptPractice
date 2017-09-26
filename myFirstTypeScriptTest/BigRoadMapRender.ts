/// <reference path="grouping.ts" />
/// <reference path="bigroadgrid.ts" />


class BigRoadMapRender {
    bigRoadMap:Array<Array<string>>;

    constructor(grid: Array<BigRoadGrid>) {
        if (grid.length === 0) {
            this.bigRoadMap = null;
            return;
        }

        this.bigRoadMap = new Array<Array<string>>();
        if (grid[0].role === "banker") {
            this.bigRoadMap.push(["b"]);    
        }
    }
}