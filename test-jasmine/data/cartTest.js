import { addToCart, cart, loadFromStorage } from "../../data/cart.js";


describe('test suite: addToCart', () => {
    it('adds an existing product to the cart', () => {
        spyOn(localStorage, 'setItem')
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: '54e0eccd-8f36-462b-b68a-8182611d9add',
                quantity: 1,
                deliveryOptionsId: 1
            }])
        })
        loadFromStorage()
        addToCart('54e0eccd-8f36-462b-b68a-8182611d9add')

        expect(cart.length).toEqual(1)
        expect(cart[0].quantity).toEqual(2)
        expect(localStorage.setItem).toHaveBeenCalledTimes(1)
        expect(localStorage.setItem).toHaveBeenCalled()
    })

    it('adds a new product to the cart', () => {
        //Create mock for loaclStorage setItem
        spyOn(localStorage, 'setItem')

        //create a mock of the localStorage getItem
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([])
        })
        
        loadFromStorage()
        addToCart('54e0eccd-8f36-462b-b68a-8182611d9add')
        
        expect(cart.length).toEqual(1)
        expect(localStorage.setItem).toHaveBeenCalledTimes(1)
        expect(localStorage.setItem).toHaveBeenCalled()
        expect(cart[0].productId).toEqual('54e0eccd-8f36-462b-b68a-8182611d9add')
        expect(cart[0].quantity).toEqual(1)
    })
})