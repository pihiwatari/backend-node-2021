const express = require('express');
const faker = require('faker')

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hola server from express');
})

/*
NOTA IMPORTANTE
TODOS LOS ENDPOINT ESTATICOS / ESPECIFICOS DEBEN DECLARARSE
ANTES QUE LOS ENDPOINTS DINAMICOS. CASO CONTRARIO EL ENDPOINT
DINAMICO LO TOMA COMO PARAMETRO.
*/

app.get('/products/filter', (req, res) => {
  res.send('Soy un filter')
})

// Faker genera un array de productos de forma aleatoria.

app.get('/products', (req, res) => {
  const products = [];

  // Obtenemos los parametros del query
  const { size } = req.query

  // Si no hay un limite declarado en la consulta, asignamos un
  // valor por defecto.
  const limit = size || 10
  for (let index = 0; index < limit; index++) {
    products.push({
      id: faker.random.alphaNumeric(5),
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl()
    });
  }

  // Respondemos con el array de productos aleatorios.
  res.json(products);
})

// ':param' (:id) es un parametro dinamico del endpoint que se envia atraves de la url,
// y podemos acceder a ella usando el objeto 'req' y el atributo params

app.get('/products/:productId', (req, res) => {
  const { productId } = req.params
  res.json({
    productId,
    name: `product ${productId}`,
    cost: 2000
  })
})

// Para multiples parametros dinamicos debemos usar un identificador único por
// parametro y obtenerlo tal cual lo nombramos en nuestra ruta.
// Ejemplo: /categories/:categoryId/products/:productId

app.get('/categories/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  res.json({
    categoryId,
  })
})

app.get('/users/:userId', (req, res) => {
  const { userId } = req.params;
  res.json({
    userId,
  })
})

  app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
})

