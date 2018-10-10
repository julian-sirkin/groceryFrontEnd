'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api_recipe.js')
const ui = require('./ui_recipe.js')

const onSearchEdanam = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data, 'object for search')
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
    .then(ui.deleteRecipeSuccess)
    .catch(ui.getRecipeFail)
}


const eventHandler = function () {
$('#navbarSearch').on('submit', onSearchEdanam)
$('#displayContainer').on('click', 'button.saveRecipe', onSaveRecipe)
$('#getRecipes').on('click', onGetRecipes)
$('#displayContainer').on('click', 'button.deleteRecipe', onDeleteRecipe)
}


module.exports = {
eventHandler
}
