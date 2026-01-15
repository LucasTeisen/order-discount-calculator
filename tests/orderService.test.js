// Gerado com o prompt:
// "Crie testes unitários em JavaScript usando Jest para a função
// calculateFinalOrderValue.
// Teste os seguintes cenários:
// - Aplica desconto quando o valor do pedido é maior que 100
// - Não aplica desconto quando o valor é menor ou igual a 100
// - Ignora desconto inválido (menor que 0 ou maior que 100)
// - Garante que o valor final nunca seja negativo"
const { calculateFinalOrderValue } = require('../src/orderService');

describe('calculateFinalOrderValue', () => {
  test('Aplica desconto quando o valor do pedido é maior que 100', () => {
    const result = calculateFinalOrderValue(200, 10);
    expect(result).toBe(180);
  });

  test('Não aplica desconto quando o valor é menor ou igual a 100', () => {
    const result = calculateFinalOrderValue(100, 20);
    expect(result).toBe(100);
  });

  test('Ignora desconto inválido (menor que 0)', () => {
    const result = calculateFinalOrderValue(150, -10);
    expect(result).toBe(150);
  });

  test('Ignora desconto inválido (maior que 100)', () => {
    const result = calculateFinalOrderValue(150, 150);
    expect(result).toBe(150);
  });

test('Garante que o valor final nunca seja negativo', () => {
  const result = calculateFinalOrderValue(200, 150);
  expect(result).toBe(0);
    });
});