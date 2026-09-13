const products = [
  // --- LAPTOPS ---
  { id: 1, category: "Laptops", name: "Laptop BasicBook 14", price: 29900, quantity: 15, message: "Out of stock" },
  { id: 2, category: "Laptops", name: "Laptop HomeOffice 15", price: 39900, quantity: 8, message: "Out of stock" },
  { id: 3, category: "Laptops", name: "Laptop WorkPad Pro 14", price: 54900, quantity: 12, message: "Out of stock" },
  { id: 4, category: "Laptops", name: "Laptop SlimBook Air 13", price: 69900, quantity: 5, message: "Out of stock" },
  { id: 5, category: "Laptops", name: "Gaming Laptop CyberGaming 15", price: 89900, quantity: 20, message: "Out of stock" },
  { id: 6, category: "Laptops", name: "Laptop Creator Pro 16", price: 119900, quantity: 3, message: "Out of stock" },
  { id: 7, category: "Laptops", name: "Ultrabook ZenTitanium 14", price: 145000, quantity: 7, message: "Out of stock" },
  { id: 8, category: "Laptops", name: "Gaming Laptop Monster RTX 17", price: 189900, quantity: 4, message: "Out of stock" },
  { id: 9, category: "Laptops", name: "Premium Laptop EliteBook X360", price: 230000, quantity: 2, message: "Out of stock" },
  { id: 10, category: "Laptops", name: "Flagship Laptop MaxBook Pro 16", price: 289900, quantity: 6, message: "Out of stock" },

  // --- SMARTPHONES ---
  { id: 11, category: "Smartphones", name: "Smartphone StartPhone A10", price: 9900, quantity: 25, message: "Out of stock" },
  { id: 12, category: "Smartphones", name: "Smartphone Optimum M30", price: 15900, quantity: 18, message: "Out of stock" },
  { id: 13, category: "Smartphones", name: "Smartphone Steady X50", price: 24900, quantity: 30, message: "Out of stock" },
  { id: 14, category: "Smartphones", name: "Smartphone CyberCam Note 10", price: 34900, quantity: 14, message: "Out of stock" },
  { id: 15, category: "Smartphones", name: "Smartphone NeoPrime Z1", price: 45900, quantity: 9, message: "Out of stock" },
  { id: 16, category: "Smartphones", name: "Smartphone PhotoExpert Zoom", price: 59900, quantity: 11, message: "Out of stock" },
  { id: 17, category: "Smartphones", name: "Smartphone Flagman S24", price: 79900, quantity: 22, message: "Out of stock" },
  { id: 18, category: "Smartphones", name: "Smartphone UltraVision Pro", price: 99900, quantity: 7, message: "Out of stock" },
  { id: 19, category: "Smartphones", name: "Foldable Smartphone FoldFlex 2", price: 129900, quantity: 4, message: "Out of stock" },
  { id: 20, category: "Smartphones", name: "Exclusive Smartphone Luxe Phone 1", price: 199900, quantity: 1, message: "Out of stock" },

  // --- HEADPHONES ---
  { id: 21, category: "Headphones", name: "Earbuds Pods Basic", price: 1500, quantity: 50, message: "Out of stock" },
  { id: 22, category: "Headphones", name: "Wireless Headphones TWS Tune", price: 3200, quantity: 40, message: "Out of stock" },
  { id: 23, category: "Headphones", name: "Sport Headphones SportBass", price: 4900, quantity: 25, message: "Out of stock" },
  { id: 24, category: "Headphones", name: "On-Ear Headphones SoundStreet", price: 7500, quantity: 16, message: "Out of stock" },
  { id: 25, category: "Headphones", name: "TWS Headphones ClearSound Pro", price: 11900, quantity: 19, message: "Out of stock" },
  { id: 26, category: "Headphones", name: "Gaming Headset CyberHear 7.1", price: 14900, quantity: 12, message: "Out of stock" },
  { id: 27, category: "Headphones", name: "Noise Canceling Headphones QuietANC", price: 22900, quantity: 8, message: "Out of stock" },
  { id: 28, category: "Headphones", name: "Over-Ear Headphones StudioSound", price: 34900, quantity: 6, message: "Out of stock" },
  { id: 29, category: "Headphones", name: "Premium Headphones Audiophile Air", price: 49900, quantity: 5, message: "Out of stock" },
  { id: 30, category: "Headphones", name: "Hi-End Headset MasterSound Pro", price: 79900, quantity: 2, message: "Out of stock" },

  // --- SMARTWATCHES ---
  { id: 31, category: "Smartwatches", name: "Fitness Tracker TrackBand 5", price: 2500, quantity: 35, message: "Out of stock" },
  { id: 32, category: "Smartwatches", name: "Smartwatch Сhrono Light", price: 4900, quantity: 20, message: "Out of stock" },
  { id: 33, category: "Smartwatches", name: "Smartwatch ActiveLife 2", price: 8900, quantity: 15, message: "Out of stock" },
  { id: 34, category: "Smartwatches", name: "Smartwatch Urban Watch", price: 13500, quantity: 10, message: "Out of stock" },
  { id: 35, category: "Smartwatches", name: "Sports Watch RunMaster", price: 19900, quantity: 14, message: "Out of stock" },
  { id: 36, category: "Smartwatches", name: "Business Watch Elegant Pro", price: 27900, quantity: 7, message: "Out of stock" },
  { id: 37, category: "Smartwatches", name: "Smartwatch HealthGuard 3", price: 35900, quantity: 9, message: "Out of stock" },
  { id: 38, category: "Smartwatches", name: "Premium Watch Titanium Sport", price: 49900, quantity: 4, message: "Out of stock" },
  { id: 39, category: "Smartwatches", name: "Flagship Watch Horizon Pro", price: 68900, quantity: 3, message: "Out of stock" },
  { id: 40, category: "Smartwatches", name: "Limited Edition Smartwatch Luxe Chrono", price: 99900, quantity: 1, message: "Out of stock" },

  // --- TABLETS ---
  { id: 41, category: "Tablets", name: "Tablet KidPad 8", price: 6900, quantity: 18, message: "Out of stock" },
  { id: 42, category: "Tablets", name: "Tablet MediaTab 10", price: 12900, quantity: 14, message: "Out of stock" },
  { id: 43, category: "Tablets", name: "Tablet HomeTab Plus", price: 19900, quantity: 12, message: "Out of stock" },
  { id: 44, category: "Tablets", name: "Tablet WorkPad SE", price: 29900, quantity: 8, message: "Out of stock" },
  { id: 45, category: "Tablets", name: "Tablet NoteTab 11 with Stylus", price: 39900, quantity: 10, message: "Out of stock" },
  { id: 46, category: "Tablets", name: "Tablet AirTab 11", price: 54900, quantity: 6, message: "Out of stock" },
  { id: 47, category: "Tablets", name: "Professional Tablet ProTab 12", price: 76900, quantity: 5, message: "Out of stock" },
  { id: 48, category: "Tablets", name: "Graphics Tablet CreatorPad 13", price: 98900, quantity: 4, message: "Out of stock" },
  { id: 49, category: "Tablets", name: "Flagship Tablet UltimateTab 13", price: 124900, quantity: 3, message: "Out of stock" },
  { id: 50, category: "Tablets", name: "2-in-1 Convertible Tablet PrimeBook 14", price: 159900, quantity: 2, message: "Out of stock" }
];

function createCardProducts(itemList, mode="All") {
    const productsContainer = document.getElementById("products-container");
    const quantityProductsInBuscet = document.getElementById("number-add-product");

    // Clear container before changing mode
    productsContainer.innerHTML = "";
    
    itemList.forEach((product, index) => {
        if (mode === "All" || product.category === mode) {
            const productCard = document.createElement("div");
            const productName = document.createElement("p");
            const productPrice = document.createElement("p");
            const productQuantity = document.createElement("p");
            const addBtn = document.createElement("button");
            addBtn.id = "add-btn";
            addBtn.className = "add-btn";
            addBtn.textContent = "Add in basket";
            addBtn.addEventListener("click", (e) => {
                console.log(product);
                if (product.quantity === 0) {
                    productQuantity.textContent = `Product quantity: ${product.message}`;
                    return;
                }
                product.quantity--;
                quantityProductsInBuscet.textContent++;
                if (product.quantity <= 0) {
                    productQuantity.textContent = `Product quantity: ${product.message}`;
                } else {
                    productQuantity.textContent = `Product quantity: ${product.quantity}`;
                }
            });
            
            productCard.className = "product";
            productCard.dataset.id = product.id;
            productName.textContent = `Product name: ${product.name}`;
            productPrice.textContent = `Product price: ${product.price}`;
            productQuantity.textContent = `Product quantity: ${product.quantity}`;
            if (product.quantity === 0) {
                productQuantity.textContent = `Product quantity: ${product.message}`;
            }
            productCard.appendChild(productName);
            productCard.appendChild(productPrice);
            productCard.appendChild(productQuantity);
            productCard.appendChild(addBtn);
            productsContainer.appendChild(productCard);
        }
    })
}

const select = document.getElementById("select");

select.addEventListener("change", (e) => {
    createCardProducts(products, e.target.value);
});

createCardProducts(products);