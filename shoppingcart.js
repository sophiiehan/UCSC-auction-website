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