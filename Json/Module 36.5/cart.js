const addproduct = () => {
  const productField = document.getElementById("product");
  const productFieldQ = document.getElementById("product-quantity");
  const product = productField.value;
  const quantity = productFieldQ.value;
  console.log(product);
  console.log(quantity);
  displayProduct(product, quantity);
  saveProduct(product,quantity);
};

const displayProduct = (product, quantity) => {
  const ul = document.getElementById("list");
  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity}`;
  ul.appendChild(li);
};

const getStoredShopingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
    return cart;
  
};

const saveProduct = (product, quantity) => {
    const cart = getStoredShopingCart();
    cart [product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);   
}

const displayProductFromLocalStorage = () => {
    const savedCart = getStoredShopingCart();
    console.log(savedCart);
    for(const product in savedCart)
    {
        const quantity = savedCart[product];
        console.log(product,quantity);
        displayProduct(product,quantity);
    }
}
displayProductFromLocalStorage();