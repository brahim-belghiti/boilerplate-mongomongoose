const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    favoriteFoods: [String]
});

module.exports = personSchema;