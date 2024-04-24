require('dotenv').config();
mongoose = require('mongoose');
personSchema = require('./schemas/person')

const DATA_BASE_URL = process.env.MONGO_URI
mongoose.connect(DATA_BASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });


let Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {

  const newPerson = new Person({
    name: 'Hamid',
    age: 30,
    favoriteFoods: ['Pizza', 'Burger']
  })

  newPerson.save((err, data) => {
    if (err) {
      // Handle any errors
      return done(err);
    }
    return done(null, data);
  });

};

const arrayOfPeople = [
  {
    name: 'Alice',
    age: 25,
    favoriteFoods: ['Sushi', 'Pasta']
  },
  {
    name: 'Bob',
    age: 30,
    favoriteFoods: ['Pizza', 'Burger']
  },
];
const createManyPeople = (arrayOfPeople, done) => {

  Person.create(arrayOfPeople, ((err, data) => {
    if (err) {
      // Handle any errors
      return done(err);
    }
    return done(null, data);
  }));

};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, ((err, data) => {
    if (err) {
      // Handle any errors
      return done(err);
    }
    return done(null, data);

  }))
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, ((err, data) => {
    if (err) {
      // Handle any errors
      return done(err);
    }
    return done(null, data);
  }))
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
