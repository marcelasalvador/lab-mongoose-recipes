const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // TODO: write the schema
  title: String,
  level: {
    type: String,
    enum: [
      "Easy Peasy", 
      "Amateur Chef",
      "UltraPro Chef"
    ]
  },
  ingredients: [ String ],
  cuisine: String,
  dishType: {
    type: String,
    enum: [
      "Breakfast", 
      "main_course",
      "Soup",
      "Snack",
      "Drink",
      "dessert",
      "Other"
    ]
  },
  image: String,
  duration: 0,
  creator: String,
  created: Date
    

});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
