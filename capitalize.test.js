import capitalize from "./capitalize";

test('capitalizes string', () => {
  expect(capitalize("hello")).toBe("Hello");
});