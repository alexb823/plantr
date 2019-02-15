const {db, Gardener, Plot, Vegetable} = require('./models.js');


db.sync({force: true})
let veggies;
    .then (() => console.log('connected'))
    .then (() => {
        return Vegetable.create({
            name: 'tomato', 
            color: 'red',
            planted_on: new Date('February 14, 2019')
        })
    })
    .then ((vegetable) => {
        return Gardener.create({
            name: 'Prof',
            age: 54,
            favoriteVegetableId: vegetable.id
        })
    })
    .then((gardener) => {
        return
    })
    .catch (err => console.error(err))
    .finally (() => {
        db.close()
    })
