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
