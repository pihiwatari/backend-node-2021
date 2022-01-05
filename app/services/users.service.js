const faker = require('faker');

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 50;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        userId: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        address: faker.address.direction(),
        registerDate: faker.date.past(5),
        orders: [], // Usar el servicio de ordenes para poblar este campo
      });
    }
  }

  async find() {
    return this.users;
  }

  findOne() {}

  create() {}

  update() {}

  delete() {}
}

module.exports = UsersService;
