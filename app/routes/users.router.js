const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const users = [];
  for (let index = 0; index < 50; index++) {
    users.push({
      id: faker.random.alphaNumeric(10),
      name: faker.name.firstName() + ' ' + faker.name.lastName(),
    });
  }
  res.json(users);
});

module.exports = router;
