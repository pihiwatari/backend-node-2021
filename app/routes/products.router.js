const express = require('express');
const ProductsService = require('../services/products.service');

const router = express.Router();

// Instanciamos el servicio para usarlo dentro de nuestro router y que
// este solo se dedique a manejar las rutas.

const service = new ProductsService();

// Enviamos la lógica del negocio (funcionalidad) a la capa de servicios
// y nuestro router solo se encarga de acceder a los servicios.

router.get('/', (req, res) => {
  const products = service.find();
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
  const newPorduct = service.create(body);
  res.status(201).json(newPorduct);
});

router.patch('/:productId', (req, res) => {
  const { productId } = req.params;
  const body = req.body;
  const updatedProduct = service.update(productId, body);
  res.status(200).json({
    message: 'Successfully updated',
    data: updatedProduct,
  });
});

router.delete('/:productId', (req, res) => {
  const { productId } = req.params;
  const deletedProduct = service.delete(productId);
  res.status(200).json({
    message: 'Deleted',
    data: deletedProduct,
  });
});

module.exports = router;
