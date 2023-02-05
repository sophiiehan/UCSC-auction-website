if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

function ready(){
    updateCartTotal()
    var removeCartItemButtons = document.getElementsByClassName('removebtn')
    for (var i = 0; i< removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i]
        button.addEventListener('click', function(event){  //when we click on the button, something happens
            var buttonClicked = event.target //the actual item being clicked
            buttonClicked.parentElement.remove() //selects the div surrounding it
            updateCartTotal()
        })
    }
}
//Creates a List of all buttons with class name "removebtn"

//Updates the total
function updateCartTotal(){
    var cartItemsContainer = document.getElementsByClassName('cart-Items-Container')[0]
    var cartItems = cartItemsContainer.getElementsByClassName("cart-item")
    var total = 0
    for (var i=0; i<cartItems.length; i++){
        var cartItem = cartItems[i] //gets the item itself
        var itemPriceElement = cartItem.getElementsByClassName("Price")[0]
        var itemQuantityElement = cartItem.getElementsByClassName("Quantity")[0]

        var price = parseFloat(itemPriceElement.innerText.replace('$','')) //Gets the price, removes the dollar sign so its just the price
        var quantity = parseFloat(itemQuantityElement.innerText)
        total += (price*quantity)
    }
    document.getElementsByClassName("subtotal")[0].innerText = '$' + total
}

// load product items content form JSON file
function loadJSON(){
    fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then(productsArray => renderAllProducts(productsArray)) //transforms JSON file into an array of objects
}
function renderAllProducts(productsArray){
    productsArray.forEach(product => renderOneProduct(product)) // Call function renderOneProduct for every item in products
}
//ADDS NEW ITEM AS A SHOPPING CART LIST
const itemContainer = document.querySelector(".cart-Items-Container");
function renderOneProduct(product){
    const newElement = document.createElement("div")
    newElement.className = "cart-item"
    newElement.innerHTML = `
        <div class="cart-item-product">
            <img src="${product.imgSrc}" alt="" />
            <div class="description-text">
                <p class="Description">${product.name}</p>
                <p class="Sold-By">Sold By: Jane Doe</p>
            </div>
        </div>

        <div class="right-cart-item">
            <div class="cart-item-quantity"><p class="Quantity">1</p></div>
            <div class="cart-item-price"><p class="Price">${product.price}</p></div>
        </div>

        <a href="#" class = "button removebtn">Remove</a>
    `
    itemContainer.append(newElement)
}
// //Cart

// let cartIcon = document.querySelector('#cart-icon');
// let cart = document.querySelector('.cart');
// let closeCart = document.querySelector('#close-cart');


// //Open and Close cart
// cartIcon.onclick = () => {
//     cart.classList.add("active");
// }

// closeCart.onclick = () => {
//     cart.classList.remove("active");
// }