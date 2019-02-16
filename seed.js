const { db, Gardener, Plot, Vegetable } = require('./models.js');

db.sync({ force: true })
  .then(() => console.log('Database synced!'))
  .then(() => {
    return Promise.all([
      Vegetable.create({
        name: 'tomato',
        color: 'red',
        planted_on: new Date('April 3, 2019'),
      }),
      Vegetable.create({
        name: 'carrot',
        color: 'orange',
        planted_on: new Date('April 4, 2019'),
      }),
      Vegetable.create({
        name: 'potato',
        color: 'yellow',
        planted_on: new Date('March 29, 2019'),
      }),
    ]);
  })
  .then(([tomato, carrot, potato]) => {
    return Promise.all([
      Gardener.create({
        name: 'moe',
        age: 121,
        favoriteVegetableId: carrot.id,
      }),
      Gardener.create({
        name: 'larry',
        age: 116,
        favoriteVegetableId: tomato.id,
      }),
      Gardener.create({
        name: 'curly',
        age: 115,
        favoriteVegetableId: carrot.id,
      }),
      Gardener.create({
        name: 'shemp',
        age: 123,
        favoriteVegetableId: potato.id,
      }),
    ]);
  })
  .then(([moe, larry, curly, shemp]) => {
    return Promise.all([
      Plot.create({ size: 4, shaded: false, gardenerId: moe.id }),
      Plot.create({ size: 3, shaded: true, gardenerId: larry.id }),
      Plot.create({ size: 5, shaded: false, gardenerId: curly.id }),
      Plot.create({ size: 2, shaded: true, gardenerId: shemp.id }),
      Vegetable.findAll(),
    ]);
  })
  .then(([moePlot, larryPlot, curlyPlot, shempPlot, vegetables]) => {
    const [tomato, carrot, potato] = vegetables;
    return Promise.all([
      moePlot.addVegetables([tomato, potato]),
      larryPlot.addVegetable(carrot),
      curlyPlot.addVegetables([carrot, potato]),
      shempPlot.addVegetable(tomato),
    ]);
  })
  .catch(err => console.error(err))
  .finally(() => db.close());
