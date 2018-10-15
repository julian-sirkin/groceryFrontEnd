'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api_recipe.js')
const ui = require('./ui_recipe.js')
const store = require('../store.js')


const onGetRecipes = function () {
  api.getRecipes()
    .then(ui.getRecipesSuccess)
    .catch(ui.getRecipesFail)
}

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
  let recipeAlreadySaved
    // If there are saved recipes then run this function, otherwise default to false
  if (store.userRecipes) {
    recipeAlreadySaved = store.userRecipes.some(recipe => {
      if (data.recipe.recipeId === recipe.uri) {
        return true
      } else {
        return false
      }
    })
  } else {
    recipeAlreadySaved = false
  }
  const recipeAlreadySaved = store.userRecipes.some(recipe => {
    if (data.recipe.recipeId === recipe.uri) {
      return true
    } else {
      return false
    }
  })
  if (!recipeAlreadySaved) {
    api.saveRecipe(data)
      .then(ui.saveRecipeSuccess)
      .then(onGetRecipes)
      .catch(ui.saveRecipeFail)
  } else {
    $('#userMessages').html('<h4>Already saved the recipe</h4>')
  }
}

const onDeleteRecipe = function (event) {
  const data = event.target.name
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
eventHandler,
onGetRecipes
}
