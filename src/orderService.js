// Gerado com o prompt:
// "Crie uma função em JavaScript chamada calculateFinalOrderValue que receba
// o valor de um pedido e um percentual de desconto.
// Se o valor do pedido for maior que 100, aplique o desconto.
// Se for menor ou igual a 100, retorne o valor original.
// Se o desconto for menor que 0 ou maior que 100, ignore o desconto.
// A função nunca deve retornar um valor negativo.
// Exporte a função usando module.exports."

function calculateFinalOrderValue(orderValue, discountPercentage) {
  let finalValue = orderValue;

  // Aplica desconto apenas se:
  // - pedido > 100
  // - desconto válido (0 a 100)
  if (
    orderValue > 100 &&
    discountPercentage >= 0 &&
    discountPercentage <= 100
  ) {
    const discount = (orderValue * discountPercentage) / 100;
    finalValue = orderValue - discount;
  }

  // Garante que nunca seja negativo
  if (finalValue < 0) {
    return 0;
  }

  return finalValue;
}

module.exports = { calculateFinalOrderValue };
