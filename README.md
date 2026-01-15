# Order Discount Calculator

A simple and efficient Node.js service for calculating order discounts.

## Features

- Calculate discount amount
- Apply discount to total amount
- Calculate total with discount for multiple items
- Input validation
- Comprehensive test coverage

## Installation

```bash
npm install
```

## Usage

```javascript
const OrderService = require('./src/orderService');

const orderService = new OrderService();

// Calculate discount
const discount = orderService.calculateDiscount(100, 10); // 10

// Apply discount
const total = orderService.applyDiscount(100, 10); // 90

// Calculate total with items
const items = [
  { price: 50, quantity: 2 },
  { price: 25, quantity: 1 }
];
const finalTotal = orderService.calculateTotal(items, 10); // 112.5
```

## Testing

Run the test suite:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Generate coverage report:

```bash
npm run test:coverage
```

## API

### `calculateDiscount(amount, discountPercentage)`

Calculates the discount amount for a given amount and percentage.

- `amount` (number): The base amount
- `discountPercentage` (number): The discount percentage (0-100)
- Returns: (number) The discount amount

### `applyDiscount(amount, discountPercentage)`

Applies a discount to an amount and returns the final total.

- `amount` (number): The base amount
- `discountPercentage` (number): The discount percentage (0-100)
- Returns: (number) The amount after discount

### `calculateTotal(items, discountPercentage)`

Calculates the total for multiple items with an optional discount.

- `items` (array): Array of items with `price` and `quantity`
- `discountPercentage` (number): The discount percentage (default: 0)
- Returns: (number) The total amount after discount

## License

MIT
