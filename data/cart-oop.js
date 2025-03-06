function Cart(localStorageKey) {
    const cart = {
        cartItems: undefined,
    
        // shorthand form of the method below will be
        // loadFromStorage(){ //code here}
    
        loadFromStorage: function() {
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey))
        
            if (!this.cartItems) {
                this.cartItems = [{
                    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                    quantity: 2,
                    deliveryOptionsId: '1'
                }, {
                    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                    quantity: 1,
                    deliveryOptionsId: '2'
                }]
            }
            
        },
    
        saveToStorage () {
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems))
        },
    
        addToCart(productId) {
            let matchingItem
            this.cartItems.forEach((cartItem) => {
                if (productId === cartItem.productId) {
                    matchingItem = cartItem
                }
            })
        
            const selectorElement = document.querySelector(`.js-quantity-selector-${productId}`)
            const selectedValue = selectorElement ? Number(selectorElement.value) : 1
        
            if (matchingItem) {
                matchingItem.quantity += selectedValue
            } else {
                this.cartItems.push({
                    productId: productId,
                    quantity: selectedValue,
                    deliveryOptionsId: '1'
                })
            }
            this.saveToStorage()
        },
    
        removeFromCart(productId) {
        
            const newCart = []
            this.cartItems.forEach((cartItem) => {
                if (cartItem.productId !== productId) {
                    newCart.push(cartItem)
                }
            })
            this.cartItems = newCart
            
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
            this.saveToStorage()
        },
    
       updateDeliveryOption(productId, deliverOptionId) {
            let matchingItem
            this.cartItems.forEach((cartItem) => {
                if (productId === cartItem.productId) {
                    matchingItem = cartItem
                }
            })
        
            matchingItem.deliveryOptionsId = deliverOptionId
        
            this.saveToStorage()
        },
    
        calculateCartQuantity(){
            let cartQuantity = 0
            this.cartItems.forEach((cartItem) => {
              cartQuantity += cartItem.quantity
            })
            return cartQuantity
        }
    }
    return cart;
}

const cart = Cart('cart-oop')
const businessCart = Cart('cart-business')
cart.loadFromStorage()
businessCart.loadFromStorage()

console.log(cart)
console.log(businessCart)