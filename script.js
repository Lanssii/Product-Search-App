// elements
let form = document.querySelector(".form");
let searchInput = document.querySelector(".search-input");
let productsContainer = document.querySelector(".products-container");

// buttons
let priceLowHigh = document.querySelector(".price-low-high");
let priceHighLow = document.querySelector(".price-high-low");

let products = [
  { name: "Laptop", price: 1200, category: "tech" },

  { name: "Phone", price: 800, category: "tech" },

  { name: "Chair", price: 150, category: "furniture" },

  { name: "Table", price: 300, category: "furniture" },

  { name: "Headphones", price: 200, category: "tech" },
];

function renderProducts(productsArray) {
  productsContainer.innerHTML = "";
  productsArray.forEach((product) => {
    let productContainer = document.createElement("div");
    productContainer.className = "product-container";

    let productName = document.createElement("p");
    productName.textContent = `Product Name: ${product.name}`;
    productContainer.appendChild(productName);

    let productPrice = document.createElement("p");
    productPrice.textContent = `Product Price: ${product.price}`;
    productContainer.appendChild(productPrice);

    let productCategory = document.createElement("p");
    productCategory.textContent = `Product Category: ${product.category}`;
    productContainer.appendChild(productCategory);

    productsContainer.appendChild(productContainer);
  });
}

renderProducts(products);

searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase();

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term) ||
      product.price.toString().includes(term)
    );
  });

  renderProducts(filteredProducts);
});

priceLowHigh.addEventListener("click", () => {
  let sorted = [...products].sort((a, b) => a.price - b.price);
  renderProducts(sorted);
});

priceHighLow.addEventListener("click", () => {
  let sorted = [...products].sort((a, b) => b.price - a.price);
  renderProducts(sorted);
});
