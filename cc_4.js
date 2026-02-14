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
    product.promoPrice = (product.price * (1 - discount)).toFixed(2);
}
console.log(products);

 // Step 4: Create a variable customerType and apply an additional discount
let customerType = "Student"; // Example: "Student", "Senior", or "Regular"
let customerExtraDiscount = 0;

if (customerType === "Student") {
    customerExtraDiscount = 0.05; // Additional 5% discount for students
    discountMessage = "Customer Type: Student - Additional 5% discount applied.";
} else if (customerType === "Senior") {
    customerExtraDiscount = 0.07; // Additional 7% discount for seniors
    discountMessage = "Customer Type: Senior - Additional 7% discount applied.";
}

console.log("\n--- Customer Type Discount Information ---");
console.log("Customer extra discount rate:", customerExtraDiscount);


