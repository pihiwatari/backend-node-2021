const express = require('express');
const ProductsService = require('../services/products.service');

const router = express.Router();

// Instanciamos el servicio para usarlo dentro de nuestro router y que
// este solo se dedique a manejar las rutas.

const service = new ProductsService();

// Enviamos la lógica del negocio (funcionalidad) a la capa de servicios
// y nuestro router solo se encarga de acceder a los servicios.

router.get('/', async (req, res) => {
  const products = await service.find();
  res.status(200).json(products);
});

// Agregamos next para que el router ejecute el middleware en case
// de que suceda un error.

router.get('/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await service.findOne(productId);
    res.status(200).json(product);
  } catch (error) {
    next(error); // Enviamos el error a los middlewares
  }
});

// POST REQUEST

router.post('/', async (req, res) => {
  // Recibimos el body desde el objeto req.body
  const body = req.body;
  const newPorduct = await service.create(body);
  res.status(201).json(newPorduct);
});

router.patch('/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;
    const body = req.body;
    const updatedProduct = await service.update(productId, body);
    res.status(200).json({
      message: 'Successfully updated',
      data: updatedProduct,
    });
  } catch (err) {
    next(err); // Enviamos el error a los middlewares
  }
});

router.delete('/:productId', async (req, res) => {
  const { productId } = req.params;
  const deletedProduct = await service.delete(productId);
  res.status(200).json({
    message: 'Deleted',
    data: deletedProduct,
  });
});

module.exports = router;
