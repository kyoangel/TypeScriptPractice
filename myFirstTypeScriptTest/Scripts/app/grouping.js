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
        for (var v in this.list) {
            var currentElement = Number(this.list[v]);
            if (!isFirstRoleFound) {
                oneGroup.push(currentElement);
            }
            else {
                if (this.isTie(currentElement)) {
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
        return !this.isTie(element);
    };
    Grouping.prototype.isTie = function (element) {
        return element === 3 || element === 7 || element === 11 || element === 15;
    };
    return Grouping;
}());
//# sourceMappingURL=grouping.js.map