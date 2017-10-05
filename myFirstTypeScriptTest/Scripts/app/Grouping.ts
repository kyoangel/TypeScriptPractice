class Grouping {
    private list: Array<number>;

    constructor(list: Array<number>) {
        this.list = list;
    }

    group(): Array<Array<number>> {
        if (this.list.length === 0) {
            return null;
        }
        let groupedElementList = new Array<Array<number>>();
        let isFirstRoleFound = false;
        let oneGroup = new Array<number>();

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

    private isRole(element: number): boolean {
        return !this.isTie(element);
    }

    private isTie(element: number): boolean {
        return element === 3 || element === 7 || element === 11 || element === 15;
    }

}