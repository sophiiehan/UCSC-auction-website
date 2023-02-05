
//Creates a List of all buttons with class name "removebtn"
var removeCartItemButtons = document.getElementsByClassName('removebtn')
for (var i = 0; i< removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event){  //when we click on the button, something happens
        var buttonClicked = event.target //the actual item being clicked
        buttonClicked.parentElement.remove() //selects the div surrounding it
        updateCartTotal()
    })
}

//Updates the total
function updateCartTotal(){
    var cartItemsContainer = document.getElementsByClassName('cart-Items-Container')[0]
    var cartItems = cartItemsContainer.getElementsByClassName("cart-item")
    for (var i=0; i<cartItems.length; i++){
        var cartItem = cartItems[i] //gets the item itself
        var itemPrice = cartItem.getElementsByClassName("Quantity")[0]
    }
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