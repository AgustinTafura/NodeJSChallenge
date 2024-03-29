'use strict';

let tableName = "Users";

if (process.env.NODE_ENV === 'test') {
  tableName += "_test";
}

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.bulkInsert(tableName, [
      {
        id: 1,
        name: "user 1",
        email: "email1@mail.com",
        password:"123123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "user 2",
        email: "email2@mail.com",
        password:"123123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: "user 3",
        email: "email3@mail.com",
        password:"123123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async ({ context: queryInterface }) => {
    await queryInterface.bulkDelete(tableName, null, {});

  }
};
