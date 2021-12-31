const express = require('express');
const routerApi = require('./routes');

const app = express();
const PORT = 3000;

// Middleware para recibir objetos json

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola server from express');
});

routerApi(app);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
