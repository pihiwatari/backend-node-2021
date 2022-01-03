const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const orders = [];
  const products = [];
  const limit =
    Math.ceil(Math.random() * 15) > 1 ? Math.ceil(Math.random() * 15) : 1;

  //for loop to populate products

  for (let index = 0; index < limit; index++) {
    products.push({
      id: faker.random.alphaNumeric(10),
      productName: faker.commerce.productName(),
      productImage: faker.image.imageUrl(),
    });
  }

  for (let index = 0; index < 150; index++) {
    orders.push({
      id: faker.random.alphaNumeric(20),
      products,
      purchasedBy: faker.name.firstName() + ' ' + faker.name.lastName(),
    });
  }

  res.json(orders);
});

router.get('/:orderId', (req, res) => {
  const { orderId } = req.params;
  const products = [];
  const limit =
    Math.ceil(Math.random() * 15) > 1 ? Math.ceil(Math.random() * 15) : 1;

  for (let index = 0; index < limit; index++) {
    products.push({
      id: faker.random.alphaNumeric(10),
      productName: faker.commerce.productName(),
      productImage: faker.image.imageUrl(),
    });
  }

  res.json({
    orderId,
    products,
  });
});

module.exports = router;
