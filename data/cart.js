export let cart = [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quauntity: 2
}, {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quauntity: 1
}]

export function addToCart(productId) {
    let matchingItem
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem
        }
    })

    const selectorElement = document.querySelector(`.js-quantity-selector-${productId}`)
    const selectedValue = Number(selectorElement.value)

    if (matchingItem) {
        matchingItem.quauntity += selectedValue
    } else {
        cart.push({
            productId: productId,
            quauntity: selectedValue
        })
    }
}

export function removeFromCart(productId) {
    const newCart = []
    cart.forEach((cartItem) => {
        if (productId !== cartItem.productId) {
            newCart.push(cartItem)
        }
    })
    cart = newCart
}