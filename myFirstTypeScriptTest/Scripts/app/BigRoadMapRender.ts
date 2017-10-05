﻿/// <reference path="grouping.ts" />
/// <reference path="bigroadgrid.ts" />

class BigRoadMapRender {
    bigRoadMap: Array<Array<string>>;

    constructor(gridArray: Array<BigRoadGrid>) {
        if (gridArray.length === 0) {
            this.bigRoadMap = null;
            return;
        }

        this.bigRoadMap = new Array<Array<string>>();

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

            } else { // 如果Role一樣 
                if (this.isDownGridAvaible(columnIndex, rowIndex)) {
                    this.bigRoadMap[columnIndex][rowIndex] = this.getRenderRole(currentGrid);
                    rowIndex++;
                } else {
                    this.putGridToRightColumn(++columnIndex, rowIndex - 1, currentGrid);
                }
            }
        }

    }

    getRenderRole(grid: BigRoadGrid): string {
        var result = "";
        if (grid.role === "banker") {
            result += "b";
        } else if (grid.role === "player") {
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
    }

    putGridToRightColumn(column: number, row: number, grid: BigRoadGrid): void {

        if (this.bigRoadMap[column] === undefined) {
            this.bigRoadMap.push(new Array<string>(6));
        }
        this.bigRoadMap[column][row] = this.getRenderRole(grid);
    }


    isDownGridAvaible(column: number, row: number): boolean {
        var result = true;
        if (row === 6) {
            result = false;
        }
        if (this.bigRoadMap[column][row] !== undefined) {
            result = false;
        }
        return result;
    }
}