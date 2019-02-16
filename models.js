const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL, { logging: false });

// // For cloud9 db
// const db = new Sequelize('ubuntu', 'postgres', 'password', {
//   host: 'localhost',
//   dialect: 'postgres',
//   logging: false,
// });

const Gardener = db.define('gardener', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER,
});

const Plot = db.define('plot', {
  size: Sequelize.INTEGER,
  shaded: Sequelize.BOOLEAN,
});

const Vegetable = db.define('vegetable', {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  planted_on: Sequelize.DATE,
});

Plot.belongsTo(Gardener);
Gardener.hasOne(Plot);
Vegetable.belongsToMany(Plot, { through: 'vegetable_plot' });
Plot.belongsToMany(Vegetable, { through: 'vegetable_plot' });
Gardener.belongsTo(Vegetable, { as: 'favoriteVegetable' });

module.exports = { db, Gardener, Plot, Vegetable };
