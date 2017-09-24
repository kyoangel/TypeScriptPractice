var BigRoadGrid = /** @class */ (function () {
    function BigRoadGrid(group) {
        this.tieCount = 0;
        this.isBankerPair = false;
        this.isPlayerPair = false;
        if (this.handleEmpty(group))
            return;
        for (var element in group) {
            var currentElement = group[element];
            if (this.isTie(currentElement)) {
                this.handleTieCase(currentElement);
            }
            else {
                this.handleNotTieCase(currentElement);
            }
        }
    }
    BigRoadGrid.prototype.handleEmpty = function (group) {
        if (group.length === 0) {
            this.role = null;
            return true;
        }
        return false;
    };
    BigRoadGrid.prototype.handleTieCase = function (element) {
        if (this.role !== "banker" && this.role !== "player") {
            this.role = "";
        }
        this.tieCount++;
    };
    BigRoadGrid.prototype.handleNotTieCase = function (element) {
        this.setBankerOrPlayerWin(element);
        this.isElementBankerPair(element);
        this.isElementPlayerPair(element);
    };
    BigRoadGrid.prototype.setBankerOrPlayerWin = function (element) {
        var banker = 1;
        if ((element & banker) !== 0) {
            this.role = "banker";
        }
        else {
            this.role = "player";
        }
    };
    BigRoadGrid.prototype.isElementBankerPair = function (element) {
        var bankerPair = 4;
        if ((element & bankerPair) !== 0) {
            this.isBankerPair = true;
        }
        else {
            this.isBankerPair = false;
        }
    };
    BigRoadGrid.prototype.isElementPlayerPair = function (element) {
        var playerPair = 8;
        if ((element & playerPair) !== 0) {
            this.isPlayerPair = true;
        }
        else {
            this.isPlayerPair = false;
        }
    };
    BigRoadGrid.prototype.isTie = function (element) {
        return element === 3 || element === 7 || element === 11 || element === 15;
    };
    return BigRoadGrid;
}());
//# sourceMappingURL=BigRoadGrid.js.map