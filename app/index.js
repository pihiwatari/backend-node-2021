const express = require('express');
const routerApi = require('./routes');
const {
  errorHandler,
  errorLogger,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const PORT = 3000;

// Middleware para recibir objetos json

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola server from express');
});

// Definicion del routing

routerApi(app);

// Error middlewares se utilizan despues de declarar el routing
// Se ejecutan segun la secuencia en la que se declaran

app.use(errorLogger); // Utiliza next(), entonces ejecuta al siguiente middleware
app.use(boomErrorHandler); // Utiliza next(), entonces ejecuta al siguiente middleware
app.use(errorHandler); // No tiene next(), se ejecuta y no llama al siguiente middleware.

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
