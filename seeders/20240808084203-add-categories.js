'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        name: 'عناية بالبشرة',
        image: 'skin_care.jpg',
        description: 'منتجات وخدمات للعناية بالبشرة.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'عناية بالشعر',
        image: 'hair_care.jpg',
        description: 'منتجات وخدمات للعناية بالشعر.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'مكياج',
        image: 'makeup.jpg',
        description: 'منتجات وخدمات المكياج.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'عناية بالأظافر',
        image: 'nail_care.jpg',
        description: 'منتجات وخدمات العناية بالأظافر.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'عطور',
        image: 'perfumes.jpg',
        description: 'مجموعة متنوعة من العطور.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'منتجات عضوية',
        image: 'organic_products.jpg',
        description: 'منتجات تجميل عضوية وطبيعية.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'عناية بالجسم',
        image: 'body_care.jpg',
        description: 'منتجات وخدمات العناية بالجسم.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'عناية بالقدمين',
        image: 'foot_care.jpg',
        description: 'منتجات وخدمات العناية بالقدمين.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'منتجات تجميلية',
        image: 'beauty_products.jpg',
        description: 'مجموعة متنوعة من المنتجات التجميلية.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'خدمات تجميلية',
        image: 'beauty_services.jpg',
        description: 'خدمات تجميلية متنوعة.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
