'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        id: 1,
        name: "raqueta de tenis",
        description: "description info",
        quantity: 10,
        status: "activo",
        seller_user: 1,
        categories: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "termo",
        description: "description info",
        quantity: 15,
        status: "activo",
        seller_user: 1,
        categories: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: "mate",
        description: "description info",
        quantity: 20,
        status: "activo",
        seller_user: 2,
        categories: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: "silla",
        description: "description info",
        quantity: 30,
        status: "activo",
        seller_user: 2,
        categories: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: "mesa",
        description: "description info",
        quantity: 12,
        status: "activo",
        seller_user: 3,
        categories: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: "martillo",
        description: "description info",
        quantity: 11,
        status: "activo",
        seller_user: 2,
        categories: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: "destornillador",
        description: "description info",
        quantity: 17,
        status: "activo",
        seller_user: 1,
        categories: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: "cepillo de dientes",
        description: "description info",
        quantity: 14,
        status: "activo",
        seller_user: 2,
        categories: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        name: "dentifrico",
        description: "description info",
        quantity: 15,
        status: "activo",
        seller_user: 3,
        categories: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});

  }
};
