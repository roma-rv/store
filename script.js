const products = [
  // --- LAPTOPS ---
  { id: 1, category: "Laptops", name: "Laptop BasicBook 14", price: 29900 },
  { id: 2, category: "Laptops", name: "Laptop HomeOffice 15", price: 39900 },
  { id: 3, category: "Laptops", name: "Laptop WorkPad Pro 14", price: 54900 },
  { id: 4, category: "Laptops", name: "Laptop SlimBook Air 13", price: 69900 },
  { id: 5, category: "Laptops", name: "Gaming Laptop CyberGaming 15", price: 89900 },
  { id: 6, category: "Laptops", name: "Laptop Creator Pro 16", price: 119900 },
  { id: 7, category: "Laptops", name: "Ultrabook ZenTitanium 14", price: 145000 },
  { id: 8, category: "Laptops", name: "Gaming Laptop Monster RTX 17", price: 189900 },
  { id: 9, category: "Laptops", name: "Premium Laptop EliteBook X360", price: 230000 },
  { id: 10, category: "Laptops", name: "Flagship Laptop MaxBook Pro 16", price: 289900 },

  // --- SMARTPHONES ---
  { id: 11, category: "Smartphones", name: "Smartphone StartPhone A10", price: 9900 },
  { id: 12, category: "Smartphones", name: "Smartphone Optimum M30", price: 15900 },
  { id: 13, category: "Smartphones", name: "Smartphone Steady X50", price: 24900 },
  { id: 14, category: "Smartphones", name: "Smartphone CyberCam Note 10", price: 34900 },
  { id: 15, category: "Smartphones", name: "Smartphone NeoPrime Z1", price: 45900 },
  { id: 16, category: "Smartphones", name: "Smartphone PhotoExpert Zoom", price: 59900 },
  { id: 17, category: "Smartphones", name: "Smartphone Flagman S24", price: 79900 },
  { id: 18, category: "Smartphones", name: "Smartphone UltraVision Pro", price: 99900 },
  { id: 19, category: "Smartphones", name: "Foldable Smartphone FoldFlex 2", price: 129900 },
  { id: 20, category: "Smartphones", name: "Exclusive Smartphone Luxe Phone 1", price: 199900 },

  // --- HEADPHONES ---
  { id: 21, category: "Headphones", name: "Earbuds Pods Basic", price: 1500 },
  { id: 22, category: "Headphones", name: "Wireless Headphones TWS Tune", price: 3200 },
  { id: 23, category: "Headphones", name: "Sport Headphones SportBass", price: 4900 },
  { id: 24, category: "Headphones", name: "On-Ear Headphones SoundStreet", price: 7500 },
  { id: 25, category: "Headphones", name: "TWS Headphones ClearSound Pro", price: 11900 },
  { id: 26, category: "Headphones", name: "Gaming Headset CyberHear 7.1", price: 14900 },
  { id: 27, category: "Headphones", name: "Noise Canceling Headphones QuietANC", price: 22900 },
  { id: 28, category: "Headphones", name: "Over-Ear Headphones StudioSound", price: 34900 },
  { id: 29, category: "Headphones", name: "Premium Headphones Audiophile Air", price: 49900 },
  { id: 30, category: "Headphones", name: "Hi-End Headset MasterSound Pro", price: 79900 },

  // --- SMARTWATCHES ---
  { id: 31, category: "Smartwatches", name: "Fitness Tracker TrackBand 5", price: 2500 },
  { id: 32, category: "Smartwatches", name: "Smartwatch Сhrono Light", price: 4900 },
  { id: 33, category: "Smartwatches", name: "Smartwatch ActiveLife 2", price: 8900 },
  { id: 34, category: "Smartwatches", name: "Smartwatch Urban Watch", price: 13500 },
  { id: 35, category: "Smartwatches", name: "Sports Watch RunMaster", price: 19900 },
  { id: 36, category: "Smartwatches", name: "Business Watch Elegant Pro", price: 27900 },
  { id: 37, category: "Smartwatches", name: "Smartwatch HealthGuard 3", price: 35900 },
  { id: 38, category: "Smartwatches", name: "Premium Watch Titanium Sport", price: 49900 },
  { id: 39, category: "Smartwatches", name: "Flagship Watch Horizon Pro", price: 68900 },
  { id: 40, category: "Smartwatches", name: "Limited Edition Smartwatch Luxe Chrono", price: 99900 },

  // --- TABLETS ---
  { id: 41, category: "Tablets", name: "Tablet KidPad 8", price: 6900 },
  { id: 42, category: "Tablets", name: "Tablet MediaTab 10", price: 12900 },
  { id: 43, category: "Tablets", name: "Tablet HomeTab Plus", price: 19900 },
  { id: 44, category: "Tablets", name: "Tablet WorkPad SE", price: 29900 },
  { id: 45, category: "Tablets", name: "Tablet NoteTab 11 with Stylus", price: 39900 },
  { id: 46, category: "Tablets", name: "Tablet AirTab 11", price: 54900 },
  { id: 47, category: "Tablets", name: "Professional Tablet ProTab 12", price: 76900 },
  { id: 48, category: "Tablets", name: "Graphics Tablet CreatorPad 13", price: 98900 },
  { id: 49, category: "Tablets", name: "Flagship Tablet UltimateTab 13", price: 124900 },
  { id: 50, category: "Tablets", name: "2-in-1 Convertible Tablet PrimeBook 14", price: 159900 }
];

function createCardProducts(itemList, mode="All") {
    const productsContainer = document.getElementById("products-container");

    // Clear container before changing mode
    productsContainer.innerHTML = "";

    itemList.forEach(numberProducts => {
        if (mode === "All" || numberProducts.category === mode) {
            const productCard = document.createElement("div");
            const productName = document.createElement("p");
            const productPrice = document.createElement("p");
            productCard.className = "product";
            productName.textContent = `Product name: ${numberProducts.name}`;
            productPrice.textContent = `Product price: ${numberProducts.price}`;
            productCard.appendChild(productName);
            productCard.appendChild(productPrice);
            productsContainer.appendChild(productCard);
        }
    })
}

function chooseMode(changeMode) {
    const select = document.getElementById("select");

    select.addEventListener("change", (e) => {
        changeMode(select.value);
    })
}

function changeMode(saveMode) {
    changeMode.savedMode = saveMode;
    createCardProducts(products, changeMode.savedMode);
}

createCardProducts(products);
chooseMode(changeMode);