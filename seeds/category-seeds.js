const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Socksseed',
  },
  {
    category_name: 'Pantsseed',
  },
  {
    category_name: 'Sweaterseeds',
  },
  {
    category_name: 'Glassesseed',
  },
  {
    category_name: 'Gloveseed',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
