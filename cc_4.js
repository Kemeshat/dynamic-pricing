//Create Product Inventory
const products = [
    { name: "Mascara",category: "Cosmetics", price:20.99,inventory: 10 },
    { name: "Pants", category: "Apparel", price:40.99,inventory: 5 },
    { name: "Ipad", category: "Electronics", price:960.99,inventory: 3 },
    { name: "Milk", category: "Grocery", price:3.99,inventory: 20 },
    { name: "Shampoo",category: "Personal Care", price:8.99,inventory: 15 },
];

//Applying category-based discounts
for (const product of products) {
    let discount = 0;

    switch (product.category) {
        case "Electronics":
            discount= 0.20; // 20% discount for Electronics
            break;
        case "Apparel":
            discount = 0.15; // 15% discount for Apparel
            break;
        case "Grocery":
            discount = 0.10; // 10% discount for Grocery
            break;
        
            default:
                discount= 0; // No discount for other categories

    }
    product.discountedPrice = (product.price * (1 - discount)).toFixed(2);
    product.discount=discount;
}
console.log(products);

 // Step 4: Create a variable customerType and apply an additional discount
let customerType = "Student"; // Example: "Student", "Senior", or "Regular"

function applyCustomerDiscount(basePrice, customerType) {
    let additionalDiscount = 0;

    if (customerType === "Student") {
        additionalDiscount = 0.05; // 5% additional discount for students
    } else if (customerType === "Senior") {
        additionalDiscount = 0.07; // 7% additional discount for seniors
    } else {
        additionalDiscount = 0; // No additional discount for regular customers
    }
    return basePrice * (1 - additionalDiscount);
}

//simulate a checkout process

console.log ("===CHECKOUT SIMULATION===");
for (let customerNum=1; customerNum<=3; customerNum++) {
    console.log(`Customer ${customerNum} (${customerType}):`);

    const types = ["Student", "Senior", "Regular"];
    const assignedType = types[Math.floor(Math.random() * types.length)];
    console.log(`Customer Type: ${assignedType}`);

    let totalCost = 0;
    const customerCart=[];
    for (let i=0; i<3; i++) {
        const product=products[i];

        if (product.inventory > 0) {
            const finalPrice = applyCustomerDiscount(product.discountedPrice, assignedType);
            customerCart.push({...product, finalPrice: finalPrice.toFixed(2)});
            totalCost += parseFloat(finalPrice);
            product.inventoryCount -= 1; // Reduce inventory by 1 for each purchased item
        }
    }
    console.log(`Total Cost: $${totalCost.toFixed(2)}`);
    console.log ("---\n");}
    