import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js'

async function loadPage(){

    await loadProductsFetch()

    await new Promise((resolve) => {
        loadCart(() => {
            resolve()
        })
    })

    renderOrderSummary()
    renderPaymentSummary()

}

loadPage()

/*
Promise.all([
    loadProductsFetch(),
    
        //new Promise((resolve) => {
        //   loadProducts(() => {
        //        resolve('value1')
        //    })
        
       // }),
    
    new Promise((resolve) => {
        loadCart(() => {
            resolve()
        })
    })
]).then((values) => {
    console.log(values)
    renderOrderSummary()
    renderPaymentSummary()
})
*/
/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve('value1')
    })

}).then((value) => {
    console.log(value)
    return new Promise((resolve) => {
        loadCart(() => {
            resolve()
        })
    })

}).then(() => {
    renderOrderSummary()
    renderPaymentSummary()
})

*/
/*
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary()
        renderPaymentSummary()
    })   
})
*/


/*
NOTES
MVC - Design Pattern
Model = saves and manages the data
View = takes data and displays on the page
Controller = runs some code when we interact with the page
*/