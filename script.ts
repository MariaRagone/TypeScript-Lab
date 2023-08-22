export {}


//TALLEST MOUNTAIN
interface Mountain {
    name: string;
    height: number;
}
let mountain:Mountain[] = [
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
]

function findNameOfTallestMountain(allMountains:Mountain[]):string{
    let tallestMountain:Mountain = allMountains.reduce((prev, current) => (current.height > prev.height)?current: prev);//provides you with the last card you looked at and the current card looked at
    // ? mark makes it a lamda expression
    return tallestMountain.name;
}

let mountainName: string = findNameOfTallestMountain(mountain);
console.log(mountainName);

//PRODUCTS


interface Product {
    name: string;
    price: number;
}
let product: Product[] = [
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
]

function calcAverageProductPrice(allProducts:Product[]):number{
    let totalPrice = 0;
    allProducts.forEach((p:Product) => {
        totalPrice += p.price;
    });
    return totalPrice/allProducts.length; 
    
    // let totalPrices = allProducts.reduce((sum,product) => sum + product.price, 0);
    // let averagePrice = totalPrices / allProducts.length;
    // return averagePrice;
}
let avgPrice: number = calcAverageProductPrice(product);
console.log(avgPrice);


//INVENTORY
interface InventoryItem {
    product: Product;
    quantity: number;
}
let inventory: InventoryItem[] = [
    {
        product:{
            name: "motor",
            price: 10.00,
        },
        quantity: 10
    },
    {
        product:{
            name: "sensor",
            price: 12.50,
        },
        quantity: 4
    },
    {
        product:{
            name: "LED",
            price: 1.00,
        },
        quantity: 20
    }
]
function calcInventoryValue(allProd:InventoryItem[]):number{
    let inventoryValue = 0;
    allProd.forEach((p:InventoryItem) => {
        let math = p.product.price *= p.quantity; 
        inventoryValue += math;
    });
    return inventoryValue; 

}
//////-------------HOW DO THESE VARIABLES RELATE TO THE ABOVE?-------------
let totalValue: number = calcInventoryValue(inventory);
console.log(totalValue);


