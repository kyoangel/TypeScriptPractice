var Grouping = /** @class */ (function () {
    function Grouping(list) {
        this.list = list;
    }
    Grouping.prototype.group = function () {
        if (this.list.length === 0) {
            return null;
        }
        var groupedElementList = new Array();
        var roleCount = 0;
        var oneGroup = new Array();
        for (var v in this.list) {
            var currentElement = Number(this.list[v]);
            if (roleCount === 0) {
                oneGroup.push(currentElement);
            }
            else {
                if (currentElement === 3) {
                    oneGroup.push(currentElement);
                    //groupedElementList[roleCount - 1].push(currentElement);
                }
                else {
                    groupedElementList.push(oneGroup);
                    oneGroup = new Array();
                    oneGroup.push(currentElement);
                }
            }
            if (currentElement === 1 || currentElement === 2) {
                roleCount++;
            }
            //if (this.list[v] !== 3) {
            //    groupedElementList.push([currentElement]);
            //} else {
            //    groupedElementList[Number(v) - 1].push(currentElement);
            //}
        }
        groupedElementList.push(oneGroup);
        return groupedElementList;
    };
    return Grouping;
}());
//# sourceMappingURL=app.js.map