const calculadora = require("../../models/calculadora.js");

test("add 2 + 2 should be 4", () => {
  const result = calculadora.somar(2, 2);
  expect(result).toBe(4);
});

test("add 'banana' + 100 should be 'Erro'", () => {
  const result = calculadora.somar("banana", 100);
  expect(result).toBe("Erro");
});

test("add 100 + 'banana' should be 'Erro'", () => {
  const result = calculadora.somar(100, "banana");
  expect(result).toBe("Erro");
});
