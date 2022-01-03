const express = require('express');
const ProductsService = require('../services/products.service');

const router = express.Router();

// Instanciamos el servicio para usarlo dentro de nuestro router y que
// este solo se dedique a manejar las rutas.

const service = new ProductsService();

// Enviamos la lógica del negocio (funcionalidad) a la capa de servicios
// y nuestro router solo se encarga de acceder a los servicios.

router.get('/', (req, res) => {
  // Limitamos
  const { size } = req.query;
  const limit = size;
  const products = service.find(limit);
  res.status(200).json(products);
});

// Enviando los parametros del id, podemos indicarle a la clase de servicio
// que nos devuelva un unico objeto

router.get('/:productId', (req, res) => {
  const { productId } = req.params;
  const product = service.findOne(productId);
  res.status(200).json(product);
});

// POST REQUEST

router.post('/', (req, res) => {
  // Recibimos el body desde el objeto req.body
  const body = req.body;

  // Respondemos con un JSON que incluya el body y un mensaje.
  // Agregamos el atributo status con el codigo que queremos responder
  res.status(201).json({
    message: 'Created',
    data: body,
  });
});

router.patch('/:productId', (req, res) => {
  const { productId } = req.params;
  const body = req.body;

  res.status(200).json({
    productId,
    message: 'Updated',
    data: body,
  });
});

router.delete('/:productId', (req, res) => {
  const { productId } = req.params;

  res.status(200).json({
    productId,
    message: 'Deleted',
  });
});

module.exports = router;
