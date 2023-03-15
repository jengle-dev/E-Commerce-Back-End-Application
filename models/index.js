// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.hasOne(Category);

// Categories have many Products
Category.belongsToMany(Product, {
  through: {
    model: Product,
    unique: false
  },
  //define an alias for when data is retrieved
  as: 'listed_products'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  //define an alias for when data is retrieved
  as: 'listed_tags'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  //define an alias for when data is retrieved
  as: 'listed_productTags'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
