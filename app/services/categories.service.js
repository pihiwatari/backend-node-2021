const faker = require('faker');

// Modularizando los servicios mantenemos un codigo mas legible, mantenible y
// en caso de algun cambio, estos no afecten el funcionamiento de otros componentes.

class CategoriesService {
  constructor() {
    this.categories = [];
    this.generate();
  }

  // Generamos la lista inicial de productos para ejecutarse una vez
  // cada que se instancie la clase

  generate() {
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        categoryId: faker.random.alphaNumeric(5),
        categoryName: faker.commerce.department(),
      });
    }
  }

  find() {
    return this.categories;
  }
  findOne(id) {
    return this.categories.find((category) => category.categoryId === id);
  }
  create() {}
  update() {}
  delete() {}
}

module.exports = CategoriesService;
