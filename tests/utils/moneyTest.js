import formatCurrency from "../../scripts/utils/money.js";


// Create a test suite
describe('test suite: formatCurrency', () => {
    //create test
    it('converts pence into pounds', () => {
        expect(formatCurrency(2095)).toEqual('20.95')
    })


    it('works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00')
    })

    it('rounds up to the nearest pence', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01')
    })
})