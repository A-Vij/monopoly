const boardData =  
[
    {
        id: 0,
        name: "GO",
        go: true,
        gridRow: '12/14',
        gridColumn: '1/3',
    },
    {
        id: 1,
        name : "Old Kent Road",
        color : "brown",
        price : 600,
        base: 20,
        hcost: 500,
        houses : 0,
        hotels : 0,
        setSize: 2,
        owned : false,
        owner : null,
        property : true,
        gridRow: '11',
        gridColumn: '1/3',
    },
    {
        id: 2,
        name: "Community Chest",
        comm: true,
        gridRow: 10,
        gridColumn: '1/3',
    },
    {
        id: 3,
        name : "Whitechapel Road",
        color : "brown",
        price : 600,
        base: 20,
        hcost: 500,
        houses : 0,
        hotels : 0,
        setSize: 2,
        owned : false,
        owner : null,
        property : true,
        gridRow: '9',
        gridColumn: '1/3',
    },
    {
        id: 4,
        name: "Income Tax",
        tax: true,
        amt: 2000,
        // property: false,
        gridRow: '8',
        gridColumn: '1/3',
    },
    {
        id: 5,
        name: "King Cross Station",
        // color : "black",
        price: 2000,
        base: 250,
        station: true,
        setSize: 4,
        owned : false,
        owner : null,
        property : true,
        gridRow: '7',
        gridColumn: '1/3',
    },
    {
        id: 6,
        name : "The Angel Islington",
        color : "lightskyblue",
        price : 1000,
        base: 60,
        hcost: 500,
        houses : 0,
        hotels : 0,
        setSize: 3,
        owned : false,
        owner : null,
        property : true,
        gridRow: '6',
        gridColumn: '1/3',
    },
    {
        id: 7,
        name: "Chance",
        chance: true,
        // property : false,
        gridRow: '5',
        gridColumn: '1/3',
    },
    {
        id: 8,
        name : "Euston Road",
        color : "lightskyblue",
        price : 1000,
        base: 60,
        hcost: 500,
        houses : 0,
        hotels : 0,
        setSize: 3,
        owned : false,
        owner : null,
        property : true,
        gridRow: '4',
        gridColumn: '1/3',
    },
    {
        id: 9,
        name : "Pentonville Road",
        color : "lightskyblue",
        price : 1200,
        base: 80,
        hcost: 500,
        houses : 0,
        hotels : 0,
        setSize: 3,
        owned : false,
        owner : null,
        property : true,
        gridRow: '3',
        gridColumn: '1/3',
    },
    {
        id: 10,
        name : "Visiting Jail",
        pass: true,
        gridRow: '1/3',
        gridColumn: '1/3',
    },
    {
        id: 11,
        name : "Pall Mall",
        color : "hotpink",
        price : 1400,
        base: 100,
        hcost: 1000,
        houses : 0,
        hotels : 0,
        setSize: 3,
        owned : false,
        owner : null,
        property : true,
        gridRow: '1/3',
        gridColumn: '3',
    },
    {
        id: 12,
        name : "Electric Company",
        // color: "z",
        base: 4,
        price : 1500,
        setSize: 2,
        owned : false,
        owner : null,
        utility : true,
        gridRow: '1/3',
        gridColumn: '4',
    },
    {
        id: 13,
        name : "Whitehall",
        color : "hotpink",
        price : 1400,
        base: 100,
        hcost: 1000,
        houses : 0,
        hotels : 0,
        setSize: 3,
        owned : false,
        owner : null,
        property : true,
        gridRow: '1/3',
        gridColumn: 5,
    },
    {
        id: 14,
        name : "Northumb'd",
        color : "hotpink",
        price : 1600,
        base: 120,
        hcost: 1000,
        houses : 0,
        hotels : 0,
        setSize: 3,
        owned : false,
        owner : null,
        property : true,
        gridRow: '1/3',
        gridColumn: '6',
    },
    {
        id: 15,
        name: "Marleybone Station",
        // color : "black",
        price: 2000,
        base: 250,
        station: true,
        setSize: 4,
        property : true,
        owned : false,
        owner : null,
        gridRow: '1/3',
        gridColumn: '7',
    },
    {
        id: 16,
        name : "Bow Street",
        color : "orange",
        price : 1800,
        base: 140,
        hcost: 1000,
        houses : 0,
        hotels : 0,
        setSize: 3,
        owned : false,
        owner : null,
        property : true,
        gridRow: '1/3',
        gridColumn: '8',
    },
    {
        id: 17,
        name: "Community Chest",
        comm: true,
        gridRow: '1/3',
        gridColumn: '9',
    },
    {
        id: 18,
        name : "Marlborough Street",
        color : "orange",
        price : 1800,
        base: 140,
        hcost: 1000,
        houses : 0,
        hotels : 0,
        setSize: 3,
        owned : false,
        owner : null,
        property : true,
        gridRow: '1/3',
        gridColumn: '10',
    },
    {
        id: 19,
        name : "Vine Street",
        color : "orange",
        price : 2000,
        base: 160,
        hcost: 1500,
        houses : 0,
        hotels : 0,
        setSize: 3,
        owned : false,
        owner : null,
        property : true,
        gridRow: '1/3',
        gridColumn: '11',
    },
    {
        id: 20,
        name : "Free Parking",
        free: true,
        gridRow: '1/3',
        gridColumn: "12/14",
    },
    {
        id: 21,
        name : "Strand",
        color : "red",
        price : 2200,
        base: 180,
        hcost: 1000,
        houses : 0,
        hotels : 0,
        setSize: 3,
        owned : false,
        owner : null,
        property : true,
        gridRow: '3',
        gridColumn: "12/14",
    },
    {
        id: 22,
        name : "Chance",
        chance : true,
        gridRow: 4,
        gridColumn: "12/14",
    },
    {
        id: 23,
        name : "Fleet Street",
        color : "red",
        price : 2200,
        base: 180,
        hcost: 1500,
        houses : 0,
        hotels : 0,
        setSize: 3,
        owned : false,
        owner : null,
        property : true,
        gridRow: '5',
        gridColumn: "12/14",
    },
    {
        id: 24,
        name : "Trafalgar Street",
        color : "red",
        price : 2400,
        base: 200,
        hcost: 1500,
        houses : 0,
        hotels : 0,
        setSize: 3,
        owned : false,
        owner : null,
        property : true,
        gridRow: '6',
        gridColumn: "12/14",
    },
    {
        id: 25,
        name: "Fenchurch Station",
        // color : "black",
        price: 2000,
        base: 250,
        station: true,
        setSize: 4,
        property : true,
        owned : false,
        owner : null,
        gridRow: '7',
        gridColumn: "12/14",
    },
    {
        id: 26,
        name : "Leicester Square",
        color : "yellow",
        price : 2600,
        base: 220,
        hcost: 1500,
        houses : 0,
        hotels : 0,
        setSize: 3,
        owned : false,
        owner : null,
        property : true,
        gridRow: '8',
        gridColumn: "12/14",
    },
    {
        id: 27,
        name : "Coventry Street",
        color : "yellow",
        price : 2600,
        base: 220,
        hcost: 1500,
        houses : 0,
        hotels : 0,
        setSize: 3,
        owned : false,
        owner : null,
        property : true,
        gridRow: '9',
        gridColumn: "12/14",
    },
    {
        id: 28,
        name: "Water Works",
        setSize: 2,
        // color: "z",
        base: 4,
        price : 1500,
        utility : true,
        gridRow: '10',
        gridColumn: "12/14",
    },
    {
        id: 29,
        name : "Picadilly",
        color : "yellow",
        price : 2800,
        base: 240,
        hcost: 1500,
        houses : 0,
        hotels : 0,
        setSize: 3,
        owned : false,
        owner : null,
        property : true,
        gridRow: '11',
        gridColumn: "12/14",
    },
    {
        id: 30,
        name: "Go To Jail",
        jail: true,
        gridRow: "12/14",
        gridColumn: "12/14",
    },
    {
        id: 31,
        name : "Regent Street",
        color : "darkgreen",
        price : 3000,
        base: 260,
        hcost: 2000,
        houses : 0,
        hotels : 0,
        setSize: 3,
        owned : false,
        owner : null,
        property : true,
        gridRow: "12/14",
        gridColumn: '11',
    },
    {
        id: 32,
        name : "Oxford Street",
        color : "darkgreen",
        price : 3000,
        base: 260,
        hcost: 2000,
        houses : 0,
        hotels : 0,
        setSize: 3,
        owned : false,
        owner : null,
        property : true,
        gridRow: "12/14",
        gridColumn: '10',
    },
    {
        id: 33,
        name: "Community Chest",
        comm: true,
        gridRow: "12/14",
        gridColumn: '9',
    },
    {
        id: 34,
        name : "Bond Street",
        color : "darkgreen",
        price : 3200,
        base: 280,
        hcost: 2000,
        houses : 0,
        hotels : 0,
        setSize: 3,
        owned : false,
        owner : null,
        property : true,
        gridRow: "12/14",
        gridColumn: '8',
    },
    {
        id: 35,
        name: "Liverpool Station",
        // color : "black",
        price: 2000,
        base: 250,
        station: true,
        setSize: 4,
        property : true,
        owned : false,
        owner : null,
        gridRow: "12/14",
        gridColumn: '7',
    },
    {
        id: 36,
        name: "Chance",
        chance: true,
        gridRow: "12/14",
        gridColumn: '6',
    },
    {
        id: 37,
        name : "Park Lane",
        color : "darkblue",
        price : 3500,
        base: 350,
        hcost: 2000,
        houses : 0,
        hotels : 0,
        setSize: 2,
        owned : false,
        owner : null,
        property : true,
        gridRow: "12/14",
        gridColumn: '5',
    },
    {
        id: 38,
        name: "Super Tax",
        tax: true,
        amt: 1000,
        gridRow: "12/14",
        gridColumn: '4',
    },
    {
        id: 39,
        name : "Mayfair",
        color : "darkblue",
        price : 4000,
        base: 500,
        hcost: 2000,
        houses : 0,
        hotels : 0,
        setSize: 2,
        owned : false,
        owner : null,
        property : true,
        gridRow: "12/14",
        gridColumn: '3',
    },
];
export default boardData;