export const cart = []

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