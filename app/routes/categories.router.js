const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const categories = [];
  for (let index = 0; index < 5; index++) {
    categories.push({
      name: faker.commerce.department(),
    });
  }
  res.json(categories);
});

router.get('/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  res.json({
    categoryId,
  });
});

module.exports = router;
