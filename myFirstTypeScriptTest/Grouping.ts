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

        for (var v in this.list) {
            var currentElement = Number(this.list[v]);
            if (!isFirstRoleFound) {
                oneGroup.push(currentElement);
            } else {
                if (this.isTie(currentElement)) {
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
        return !this.isTie(element);
    }

    isTie(element: number): boolean {
        return element === 3 || element === 7 || element === 11 || element === 15;
    }

}