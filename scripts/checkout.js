import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js'

loadProducts(() => {
    renderOrderSummary()
    renderPaymentSummary()
})


/*
NOTES
MVC - Design Pattern
Model = saves and manages the data
View = takes data and displays on the page
Controller = runs some code when we interact with the page
*/