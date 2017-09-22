class Grouping {
    list: Array<number>;

    constructor(list: Array<number>) {
        this.list = list;
    }

    group(): Array<Array<number>> {
        if (this.list.length === 0) {
            return null;
        }
        let groupedElementList = new Array<Array<number>>();
        var isFirstRoleFound = false;
        var oneGroup = new Array<number>();
        var tie = 3;
        for (var v in this.list) {
            var currentElement = Number(this.list[v]);
            if (!isFirstRoleFound) {
                oneGroup.push(currentElement);
            } else {
                if (currentElement === tie) {
                    oneGroup.push(currentElement);
                } else {
                    groupedElementList.push(oneGroup);
                    oneGroup = new Array<number>();
                    oneGroup.push(currentElement);
                }
            }
            if (!isFirstRoleFound)
                isFirstRoleFound = this.isRole(currentElement);
        }
        groupedElementList.push(oneGroup);

        return groupedElementList;
    }

    isRole(element: number): boolean {
        var banker = 1;
        var player = 2;
        return element === banker || element === player;
    }


}