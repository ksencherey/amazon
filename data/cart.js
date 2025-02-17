export let cart

loadFromStorage()

export function loadFromStorage(){
    cart = JSON.parse(localStorage.getItem('cart'))

    if (!cart) {
        cart = [{
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 2,
            deliveryOptionsId: '1'
        }, {
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 1,
            deliveryOptionsId: '2'
        }]
    }
    
}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
}

export function addToCart(productId) {
    let matchingItem
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem
        }
    })

    const selectorElement = document.querySelector(`.js-quantity-selector-${productId}`)
    const selectedValue = selectorElement ? Number(selectorElement.value) : 1

    if (matchingItem) {
        matchingItem.quantity += selectedValue
    } else {
        cart.push({
            productId: productId,
            quantity: selectedValue,
            deliveryOptionsId: '1'
        })
    }
    saveToStorage()
}

export function removeFromCart(productId) {
    
    const newCart = []
    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem)
        }
    })
    cart = newCart
    
   /*
   // find the product in the cart
   const cartItem = cart.find((item) =>{
     item.productId === productId
   })

   if(cartItem){
    // if quantity is more than 1, reduce the quantity by  1
        if(cartItem.quantity > 1){
            cartItem.quantity -= 1
        } else{
            // if the quantity is 1, remove the product completely
            cart = cart.filter((item) =>{
                item.productId !== productId
            })
        }
   }*/
   // save the updated cart to storage
    saveToStorage()
}

export function updateDeliveryOption(productId, deliverOptionId) {
    let matchingItem
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem
        }
    })

    matchingItem.deliveryOptionsId = deliverOptionId

    saveToStorage()
}

export function calculateCartQuantity(){
    let cartQuantity = 0
    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity
    })
    return cartQuantity
}