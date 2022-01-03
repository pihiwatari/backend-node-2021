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

  find(limit = 10) {
    return this.products.slice(0, limit);
  }
  findOne(id) {
    return this.products.find((product) => product.id === id);
  }
  create() {}
  update() {}
  delete() {}
}

module.exports = ProductsService;
