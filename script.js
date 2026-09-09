const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Smartphone", price: 699 },
  { id: 3, name: "Wireless Headphones", price: 149 },
  { id: 4, name: "Mechanical Keyboard", price: 89 },
  { id: 5, name: "Gaming Mouse", price: 49 }
];

function createCardProducts(itemList) {
    const productsContainer = document.getElementById("products-container");

    // Clear container before changing mode
    productsContainer.innerHTML = "";

    itemList.forEach(numberProducts => {
        const productCard = document.createElement("div");
        const productName = document.createElement("p");
        const productPrice = document.createElement("p");
        productCard.className = "product";
        productName.textContent = `Product name: ${numberProducts.name}`;
        productPrice.textContent = `Product price: ${numberProducts.price}`;
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productsContainer.appendChild(productCard);
    })
}

createCardProducts(products);