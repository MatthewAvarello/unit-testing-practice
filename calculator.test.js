import Calculator from "./calculator";

const calculator = new Calculator()


describe("calculator class", () => {
    test('Adds two numbers',() => {
        expect(calculator.add(2,3)).toBe(5)
    })
    test('Subtracts two numbers',() => {
        expect(calculator.subtract(10,2)).toBe(8)
    })
    test('Multiply two numbers',() => {
        expect(calculator.multiply(2,10)).toBe(20)
    })
    test("Divide two numbers", () => {
        expect(calculator.divide(50,5)).toBe(10)
    })
})