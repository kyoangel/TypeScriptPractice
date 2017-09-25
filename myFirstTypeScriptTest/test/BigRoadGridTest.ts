/// <reference path="../bigroadgrid.ts" />

describe("BigRoadGridTest", function () {
    it("input empty role should be null", function () {
        let bigRoadGrid = new BigRoadGrid([]);

        expect(null).toEqual(bigRoadGrid.role);
        expect(0).toEqual(bigRoadGrid.tieCount);
        expect(false).toEqual(bigRoadGrid.isBankerPair);
        expect(false).toEqual(bigRoadGrid.isPlayerPair);
    });

    it("A single bankerwin element group", function () {
        let bigRoadGrid = new BigRoadGrid([1]);
        
        expect("banker").toEqual(bigRoadGrid.role);
        expect(0).toEqual(bigRoadGrid.tieCount);
        expect(false).toEqual(bigRoadGrid.isBankerPair);
        expect(false).toEqual(bigRoadGrid.isPlayerPair);
    });

    it("A single playerwin element group", function () {
        let bigRoadGrid = new BigRoadGrid([2]);

        expect("player").toEqual(bigRoadGrid.role);
        expect(0).toEqual(bigRoadGrid.tieCount);
        expect(false).toEqual(bigRoadGrid.isBankerPair);
        expect(false).toEqual(bigRoadGrid.isPlayerPair);
    });

    it("A single Tie element group", function () {
        let bigRoadGrid = new BigRoadGrid([3]);

        expect("").toEqual(bigRoadGrid.role);
        expect(1).toEqual(bigRoadGrid.tieCount);
        expect(false).toEqual(bigRoadGrid.isBankerPair);
        expect(false).toEqual(bigRoadGrid.isPlayerPair);
    });

    it("Banker win, banker pair", function () {
        let bigRoadGrid = new BigRoadGrid([5]);

        expect("banker").toEqual(bigRoadGrid.role);
        expect(0).toEqual(bigRoadGrid.tieCount);
        expect(true).toEqual(bigRoadGrid.isBankerPair);
        expect(false).toEqual(bigRoadGrid.isPlayerPair);
    });

    it("Leading Tie + bankerWin element group", function () {
        let bigRoadGrid = new BigRoadGrid([3, 1]);

        expect("banker").toEqual(bigRoadGrid.role);
        expect(1).toEqual(bigRoadGrid.tieCount);
        expect(false).toEqual(bigRoadGrid.isBankerPair);
        expect(false).toEqual(bigRoadGrid.isPlayerPair);
    });

    it("Leading Tie + bankerWin + Tie element group", function () {
        let bigRoadGrid = new BigRoadGrid([3, 1, 3]);

        expect("banker").toEqual(bigRoadGrid.role);
        expect(2).toEqual(bigRoadGrid.tieCount);
        expect(false).toEqual(bigRoadGrid.isBankerPair);
        expect(false).toEqual(bigRoadGrid.isPlayerPair);
    });

    it("Leading playerWin Tie*2 element group", function () {
        let bigRoadGrid = new BigRoadGrid([2, 3, 3]);

        expect("player").toEqual(bigRoadGrid.role);
        expect(2).toEqual(bigRoadGrid.tieCount);
        expect(false).toEqual(bigRoadGrid.isBankerPair);
        expect(false).toEqual(bigRoadGrid.isPlayerPair);
    });

    it("Tie is 3 7 11 15", function () {
        let bigRoadGrid = new BigRoadGrid([3, 2, 7, 11, 15]);

        expect("player").toEqual(bigRoadGrid.role);
        expect(4).toEqual(bigRoadGrid.tieCount);
        expect(false).toEqual(bigRoadGrid.isBankerPair);
        expect(false).toEqual(bigRoadGrid.isPlayerPair);
    });

    it("Input PlayerWin and BankerPair", function () {
        let bigRoadGrid = new BigRoadGrid([3, 6, 7, 11, 15]);

        expect("player").toEqual(bigRoadGrid.role);
        expect(4).toEqual(bigRoadGrid.tieCount);
        expect(true).toEqual(bigRoadGrid.isBankerPair);
        expect(false).toEqual(bigRoadGrid.isPlayerPair);
    });

    it("Input BankerWin and PlayerrPair", function () {
        let bigRoadGrid = new BigRoadGrid([9]);

        expect("banker").toEqual(bigRoadGrid.role);
        expect(0).toEqual(bigRoadGrid.tieCount);
        expect(false).toEqual(bigRoadGrid.isBankerPair);
        expect(true).toEqual(bigRoadGrid.isPlayerPair);
    });
});