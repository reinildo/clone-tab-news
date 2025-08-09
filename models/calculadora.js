function somar(num1, num2) {
  if (typeof num1 === "string" || typeof num2 === "string") {
    return "Erro";
  }
  return num1 + num2;
}
exports.somar = somar;
