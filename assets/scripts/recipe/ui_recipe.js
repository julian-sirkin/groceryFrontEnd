'use strict'
const recipeCard = require('../../../templates/recipeCard.handlebars')
const userRecipeCard = require('../../../templates/userRecipeCard.handlebars')
const uiAuth = require('../auth/ui-auth')

const searchEdananmSuccess = function (data) {
  const addRecipeToHtml = recipeCard({recipes: data.body})
  $('#displayContainer').html(addRecipeToHtml)
}

const searchEdanamFail = function () {
  alert('failed to get info, time to debug')
}

const saveRecipeSuccess = function () {
  alert('Saved the recipe')
}

const saveRecipeFail = function () {
  alert('did not get the recipes')
}

const getRecipesSuccess = function (data) {
  const addUserRecipeToHtml = userRecipeCard({recipe: data.body})
  $('#displayContainer').html(addUserRecipeToHtml)
  uiAuth.clearInputFields()
}

const getRecipesFail = function () {
  uiAuth.clearInputFields()
  $('#displayContainer').html('<h4>Unable to get recipes, try again! </h4>')
}

const deleteRecipeSuccess = function () {
  alert('removed recipe')
}

const deleteRecipeFail = function () {
  alert('Did not remove recipe.....sad')
}

const buyIngredientsFail = function () {
  alert('did not go to amazon.')
}
const buyIngredientsSuccsess = function (data) {
  console.log(data)
  alert('Went to amazon')
}

module.exports = {
  searchEdananmSuccess,
  searchEdanamFail,
  saveRecipeSuccess,
  saveRecipeFail,
  getRecipesSuccess,
  getRecipesFail,
  deleteRecipeSuccess,
  deleteRecipeFail,
  buyIngredientsFail,
  buyIngredientsSuccsess
}
