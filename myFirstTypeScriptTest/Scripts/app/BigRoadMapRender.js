/// <reference path="grouping.ts" />
/// <reference path="bigroadgrid.ts" />
var BigRoadMapRender = /** @class */ (function () {
    function BigRoadMapRender(gridArray) {
        if (gridArray.length === 0) {
            this.bigRoadMap = null;
            return;
        }
        this.bigRoadMap = new Array();
        var roleColumnIndex = 0;
        var columnIndex = 0;
        var rowIndex = 0;
        // 先填入第一顆，並決定目前Role
        this.putGridToRightColumn(roleColumnIndex, rowIndex, gridArray[0]);
        var currentRole = gridArray[0].role;
        rowIndex++;
        // 根據目前的Role來決定如何填入下一顆
        for (var i = 1; i < gridArray.length; i++) {
            var currentGrid = gridArray[i];
            //如果Role不一樣
            if (currentRole !== currentGrid.role && currentGrid.role !== "") {
                currentRole = currentGrid.role;
                roleColumnIndex++;
                columnIndex = roleColumnIndex;
                rowIndex = 0;
                this.putGridToRightColumn(roleColumnIndex, rowIndex, currentGrid);
                rowIndex++;
            }
            else {
                if (this.isDownGridAvaible(columnIndex, rowIndex)) {
                    this.bigRoadMap[columnIndex][rowIndex] = this.getRenderRole(currentGrid);
                    rowIndex++;
                }
                else {
                    this.putGridToRightColumn(++columnIndex, rowIndex - 1, currentGrid);
                }
            }
        }
    }
    BigRoadMapRender.prototype.getRenderRole = function (grid) {
        var result = "";
        if (grid.role === "banker") {
            result += "b";
        }
        else if (grid.role === "player") {
            result += "p";
        }
        if (grid.isPlayerPair)
            result += "p";
        if (grid.isBankerPair)
            result += "b";
        if (grid.tieCount > 0) {
            result += ":";
            result += grid.tieCount;
        }
        return result;
    };
    BigRoadMapRender.prototype.putGridToRightColumn = function (column, row, grid) {
        if (this.bigRoadMap[column] === undefined) {
            this.bigRoadMap.push(new Array(6));
        }
        this.bigRoadMap[column][row] = this.getRenderRole(grid);
    };
    BigRoadMapRender.prototype.isDownGridAvaible = function (column, row) {
        var result = true;
        if (row === 6) {
            result = false;
        }
        if (this.bigRoadMap[column][row] !== undefined) {
            result = false;
        }
        return result;
    };
    return BigRoadMapRender;
}());
//# sourceMappingURL=BigRoadMapRender.js.map