const express = require('express');
const faker = require('faker');

const router = express.Router();

// Faker genera un array de productos de forma aleatoria.

router.get('/', (req, res) => {
  const products = [];

  // Obtenemos los parametros del query
  const { size } = req.query;

  // Si no hay un limite declarado en la consulta, asignamos un
  // valor por defecto.
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      id: faker.random.alphaNumeric(5),
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl(),
      category: faker.commerce.department(),
    });
  }

  // Respondemos con el array de productos aleatorios.
  res.json(products);
});

/*
NOTA IMPORTANTE
TODOS LOS ENDPOINT ESTATICOS / ESPECIFICOS DEBEN DECLARARSE
ANTES QUE LOS ENDPOINTS DINAMICOS. CASO CONTRARIO EL ENDPOINT
DINAMICO LO TOMA COMO PARAMETRO.
*/

router.get('/filter', (req, res) => {
  res.send('Soy un filter');
});

// ':param' (:id) es un parametro dinamico del endpoint que se envia atraves de la url,
// y podemos acceder a ella usando el objeto 'req' y el atributo params

router.get('/:productId', (req, res) => {
  const { productId } = req.params;
  res.json({
    productId,
    name: `product ${productId}`,
    cost: 2000,
  });
});

// POST REQUEST

router.post('/', (req, res) => {
  // Recibimos el body desde el objeto req.body
  const body = req.body;

  // Respondemos con un JSON que incluya el body y un mensaje.
  res.json({
    message: 'Created',
    data: body,
  });
});

module.exports = router;
