var Grouping = /** @class */ (function () {
    function Grouping(list) {
        this.list = list;
    }
    Grouping.prototype.group = function () {
        if (this.list.length === 0) {
            return null;
        }
        var groupedElementList = new Array();
        var isFirstRoleFound = false;
        var oneGroup = new Array();
        var tie = 3;
        for (var v in this.list) {
            var currentElement = Number(this.list[v]);
            if (!isFirstRoleFound) {
                oneGroup.push(currentElement);
            }
            else {
                if (currentElement === tie) {
                    oneGroup.push(currentElement);
                }
                else {
                    groupedElementList.push(oneGroup);
                    oneGroup = new Array();
                    oneGroup.push(currentElement);
                }
            }
            if (!isFirstRoleFound)
                isFirstRoleFound = this.isRole(currentElement);
        }
        groupedElementList.push(oneGroup);
        return groupedElementList;
    };
    Grouping.prototype.isRole = function (element) {
        var banker = 1;
        var player = 2;
        return element === banker || element === player;
    };
    return Grouping;
}());
//# sourceMappingURL=Grouping.js.map