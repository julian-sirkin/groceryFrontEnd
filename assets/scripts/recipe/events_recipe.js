'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api_recipe.js')
const ui = require('./ui_recipe.js')

const onSearchEdanam = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.searchEdanam(data)
    .then(ui.searchEdananmSuccess)
    .catch(ui.searchEdanamFail)
}

const onSaveRecipe = function (event) {
  const data = {recipe: {
    recipeId: event.target.name
  }}
  api.saveRecipe(data)
    .then(ui.saveRecipeSuccess)
    .catch(ui.saveRecipeFail)
}

const onGetRecipes = function () {
  api.getRecipes()
    .then(ui.getRecipesSuccess)
    .catch(ui.getRecipesFail)
}

const onDeleteRecipe = function (event) {
  const data = event.target.name
  console.log(data, 'this is the data')
  api.deleteRecipe(data)
    .then(onGetRecipes)
    .then(ui.deleteRecipeSuccess)
    .catch(ui.getRecipeFail)
}

const onBuyIngredients = function () {
  const data = {
  "ingredients": [
    {
      "name": "Oranges",
      "quantityList": [
        {
          "unit": "COUNT",
          "amount": 5
        },
        {
          "unit": "KILOGRAMS",
          "amount": 0.5
        }
      ]
    },
    {
      "name": "Greek Yogurt",
      "brand": "chobani",
      "quantityList": [
        {
          "unit": "OUNCES",
          "amount": 5
        }
      ]
    }
  ]
}
  api.buyIngredients(data)
    //.then(ui.buyIngredientsSuccsess)
      .then(response => {
        $('html').html(response.body)

      })
    .catch(ui.buyIngredientsFail)
}


const eventHandler = function () {
$('#navbarSearch').on('submit', onSearchEdanam)
$('#displayContainer').on('click', 'button.saveRecipe', onSaveRecipe)
$('#getRecipes').on('click', onGetRecipes)
$('#displayContainer').on('click', 'button.deleteRecipe', onDeleteRecipe)
$('#buyIngredients').on('click', onBuyIngredients)
}


module.exports = {
eventHandler
}
