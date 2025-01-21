'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Services', [
      // خدمات لعناية بالبشرة
      {
        name: 'تنظيف البشرة',
        image: 'facial_cleaning.jpg',
        description: 'خدمة تنظيف البشرة بعمق.',
        price: 50.0,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'تقشير البشرة',
        image: 'skin_exfoliation.jpg',
        description: 'خدمة تقشير البشرة لإزالة الخلايا الميتة.',
        price: 40.0,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ترطيب البشرة',
        image: 'skin_moisturizing.jpg',
        description: 'خدمة ترطيب البشرة بعمق.',
        price: 45.0,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'علاج حب الشباب',
        image: 'acne_treatment.jpg',
        description: 'خدمة علاج حب الشباب.',
        price: 60.0,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'علاج التجاعيد',
        image: 'wrinkle_treatment.jpg',
        description: 'خدمة علاج التجاعيد.',
        price: 70.0,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // خدمات لعناية بالشعر
      {
        name: 'قص الشعر',
        image: 'hair_cut.jpg',
        description: 'خدمة قص الشعر.',
        price: 30.0,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'صبغ الشعر',
        image: 'hair_dye.jpg',
        description: 'خدمة صبغ الشعر.',
        price: 80.0,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'علاج تساقط الشعر',
        image: 'hair_loss_treatment.jpg',
        description: 'خدمة علاج تساقط الشعر.',
        price: 90.0,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'تصفيف الشعر',
        image: 'hair_styling.jpg',
        description: 'خدمة تصفيف الشعر.',
        price: 40.0,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'علاج الشعر التالف',
        image: 'damaged_hair_treatment.jpg',
        description: 'خدمة علاج الشعر التالف.',
        price: 100.0,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // خدمات مكياج
      {
        name: 'مكياج يومي',
        image: 'daily_makeup.jpg',
        description: 'خدمة مكياج يومي.',
        price: 50.0,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'مكياج سهرة',
        image: 'evening_makeup.jpg',
        description: 'خدمة مكياج سهرة.',
        price: 70.0,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'مكياج زفاف',
        image: 'wedding_makeup.jpg',
        description: 'خدمة مكياج زفاف.',
        price: 100.0,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'مكياج تصوير',
        image: 'photo_shoot_makeup.jpg',
        description: 'خدمة مكياج جلسات التصوير.',
        price: 80.0,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'مكياج مناسبات',
        image: 'event_makeup.jpg',
        description: 'خدمة مكياج مناسبات.',
        price: 60.0,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // خدمات عناية بالأظافر
      {
        name: 'مانيكير',
        image: 'manicure.jpg',
        description: 'خدمة مانيكير.',
        price: 30.0,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'باديكير',
        image: 'pedicure.jpg',
        description: 'خدمة باديكير.',
        price: 35.0,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'تركيب أظافر',
        image: 'nail_extension.jpg',
        description: 'خدمة تركيب الأظافر.',
        price: 50.0,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'تزيين الأظافر',
        image: 'nail_art.jpg',
        description: 'خدمة تزيين الأظافر.',
        price: 40.0,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'علاج الأظافر',
        image: 'nail_treatment.jpg',
        description: 'خدمة علاج الأظافر.',
        price: 45.0,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // خدمات عطور
      {
        name: 'عطر شرقي',
        image: 'oriental_perfume.jpg',
        description: 'خدمة عطر شرقي.',
        price: 150.0,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'عطر غربي',
        image: 'western_perfume.jpg',
        description: 'خدمة عطر غربي.',
        price: 160.0,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'عطر زهري',
        image: 'floral_perfume.jpg',
        description: 'خدمة عطر زهري.',
        price: 140.0,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'عطر خشبي',
        image: 'woody_perfume.jpg',
        description: 'خدمة عطر خشبي.',
        price: 155.0,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'عطر فاكهي',
        image: 'fruity_perfume.jpg',
        description: 'خدمة عطر فاكهي.',
        price: 145.0,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Services', null, {});
  }
};
