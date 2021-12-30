const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hola server from express');
})
app.get('/ruta', (req, res) => {
  res.send('Hola soy el ultimo endpoint');
})
app.get('/products', (req, res) => {
  res.json({
    response: "Hola soy un json",
    number: 900
  });
})

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
})

