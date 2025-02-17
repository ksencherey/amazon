import formatCurrency from "../scripts/utils/money.js";

console.log('Test suite: formarCurrency')
console.log('Pence cents into pounds')
if (formatCurrency(2095) === '20.95'){
    console.log('passed')
} else {
    console.log('failed')
}

console.log('Works with 0')
if (formatCurrency(0) === '00.00'){
    console.log('passed')
} else {
    console.log('failed')
}

console.log('Rounds up to the nearest pence')
if (formatCurrency(2000.5) === '20.01'){
    console.log('passed')
} else {
    console.log('failed')
}