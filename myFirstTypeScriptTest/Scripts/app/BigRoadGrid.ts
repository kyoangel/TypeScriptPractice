class BigRoadGrid {
    role: string;
    tieCount: number = 0;
    isBankerPair: boolean = false;
    isPlayerPair: boolean = false;

    constructor(group: Array<number>) {
        if (this.handleEmpty(group)) return;
        
        for (var element in group) {
            var currentElement = group[element];
            if (this.isTie(currentElement)) {
                this.handleTieCase(currentElement);
            } else {
                this.handleNotTieCase(currentElement);
            }
        }
    }

    handleEmpty(group: Array<number>): boolean {
        if (group.length === 0) {
            this.role = null;
            return true;
        }
        return false;
    }

    handleTieCase(element: number): void {
        if (this.role !== "banker" && this.role !== "player") {
            this.role = "";
        }
        this.tieCount++;
    }

    handleNotTieCase(element: number): void {
        this.setBankerOrPlayerWin(element);
        this.isElementBankerPair(element);
        this.isElementPlayerPair(element);
    }

    setBankerOrPlayerWin(element: number): void {
        var banker = 1;
        if ((element & banker) !== 0) {
            this.role = "banker";
        } else {
            this.role = "player";
        }
    }

    isElementBankerPair(element: number) :void{
        var bankerPair = 4;
        if ((element & bankerPair) !== 0) {
            this.isBankerPair = true;
        } else {
            this.isBankerPair = false;
        }
    }

    isElementPlayerPair(element: number) :void{
        var playerPair = 8;
        if ((element & playerPair) !== 0) {
            this.isPlayerPair = true;
        } else {
            this.isPlayerPair = false;
        }
    }

    isTie(element: number): boolean {
        return element === 3 || element === 7 || element === 11 || element === 15;
    }
}