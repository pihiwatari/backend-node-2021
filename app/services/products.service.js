const faker = require('faker');

// Modularizando los servicios mantenemos un codigo mas legible, mantenible y
// en caso de algun cambio, estos no afecten el funcionamiento de otros componentes.

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  // Generamos la lista inicial de productos para ejecutarse una vez
  // cada que se instancie la clase

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.imageUrl(),
        category: faker.commerce.department(),
      });
    }
  }

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find((product) => product.id === id);
  }

  create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),

      // Con esto copiamos los valores de data, asi como su estructura
      ...data,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  update(id, changes) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new Error(`This item doesn't exists`);
    }

    // Obtenemos el producto original del array y con spread
    // copiamos los atributos y agregamos o sustituimos los cambios
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }

  delete(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new Error(`This item doesn't exists`);
    }

    // Crea una copia del producto a borrar para retornarla e indicar
    // cual fue el elemento que se elimino

    const product = this.products[index];
    this.products.splice(index, 1);
    return product;
  }
}

module.exports = ProductsService;
