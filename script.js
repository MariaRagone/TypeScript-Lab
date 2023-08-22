"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mountain = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
];
function findNameOfTallestMountain(allMountains) {
    var tallestMountain = allMountains.reduce(function (prev, current) { return (current.height > prev.height) ? current : prev; }); //provides you with the last card you looked at and the current card looked at
    // ? mark makes it a lamda expression
    return tallestMountain.name;
}
var mountainName = findNameOfTallestMountain(mountain);
console.log(mountainName);
var product = [
    {
        name: "Soap",
        price: 2.00
    },
    {
        name: "Lotion",
        price: 8.00
    },
    {
        name: "Medicine",
        price: 20.00
    },
    {
        name: "Paper Towel",
        price: 2.00
    },
    {
        name: "Nail Polish",
        price: 6.00
    }
];
function calcAverageProductPrice(allProducts) {
    var totalPrice = 0;
    allProducts.forEach(function (p) {
        totalPrice += p.price;
    });
    return totalPrice / allProducts.length;
    // let totalPrices = allProducts.reduce((sum,product) => sum + product.price, 0);
    // let averagePrice = totalPrices / allProducts.length;
    // return averagePrice;
}
var avgPrice = calcAverageProductPrice(product);
console.log(avgPrice);
var inventory = [
    {
        product: {
            name: "motor",
            price: 10.00,
        },
        quantity: 10
    },
    {
        product: {
            name: "sensor",
            price: 12.50,
        },
        quantity: 4
    },
    {
        product: {
            name: "LED",
            price: 1.00,
        },
        quantity: 20
    }
];
function calcInventoryValue(allProd) {
    var inventoryValue = 0;
    allProd.forEach(function (p) {
        var math = p.product.price *= p.quantity;
        inventoryValue += math;
    });
    return inventoryValue;
}
var totalValue = calcInventoryValue(inventory);
console.log(totalValue);
