import caesarCipher from "./caesarCipher"
test('all lowercase',() => {
    expect(caesarCipher("hello",1)).toBe("ifmmp")
    expect(caesarCipher("zwhyz",4)).toBe("dalcd")
})
test('lowercase and uppercase with spaces', () => {
    expect(caesarCipher("Hey how are Yousa doing",2)).toBe("Jga jqy ctg Aqwuc fqkpi")
})
test('special symbols',() => {
    expect(caesarCipher("Hey! What is 2(2 + 3)",7)).toBe("Olf! Doha pz 2(2 + 3)")
})