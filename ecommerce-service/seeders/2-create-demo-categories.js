'use strict';

let tableName = "Categories";

if (process.env.NODE_ENV === 'test') {
  tableName += "_test";
}

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.bulkInsert(tableName, [
      {
        id: 1,
        name: "category A",
        description: "description info",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "category B",
        description: "description info",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: "category C",
        description: "description info",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: "category D",
        description: "description info",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: "category E",
        description: "description info",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: "category F",
        description: "description info",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async ({ context: queryInterface }) => {
    await queryInterface.bulkDelete(tableName, null, {});

  }
};
