// Gerado com o prompt:
// "Crie uma função em JavaScript chamada calculateFinalOrderValue que receba
// o valor de um pedido e um percentual de desconto.
// Se o valor do pedido for maior que 100, aplique o desconto.
// Se for menor ou igual a 100, retorne o valor original.
// Se o desconto for menor que 0 ou maior que 100, ignore o desconto.
// A função nunca deve retornar um valor negativo.
// Exporte a função usando module.exports."

function calculateFinalOrderValue(amount, discountPercentage) {
  if (amount <= 100) {
    return amount;
  }

  if (discountPercentage < 0 || discountPercentage > 100) {
    return amount;
  }

  const discount = (amount * discountPercentage) / 100;
  const finalValue = amount - discount;

  return Math.max(0, finalValue);
}

module.exports = { calculateFinalOrderValue };
