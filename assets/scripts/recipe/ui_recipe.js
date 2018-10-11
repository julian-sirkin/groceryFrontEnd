'use strict'
const recipeCard = require('../../../templates/recipeCard.handlebars')
const userRecipeCard = require('../../../templates/userRecipeCard.handlebars')
const pageUi = require('../page_view/ui_page')

const searchEdananmSuccess = function (data) {
  pageUi.loginScreen()
  const addRecipeToHtml = recipeCard({recipes: data.body})
  $('#displayContainer').html(addRecipeToHtml)
}

const searchEdanamFail = function () {
  $('displayContainer').html('<h3>Please try again</h3>')
}

const saveRecipeSuccess = function () {
  alert('Saved the recipe')
}

const saveRecipeFail = function () {
  $('displayContainer').html('<h3>Please try again</h3>')
}

const getRecipesSuccess = function (data) {
  pageUi.loginScreen()
  const addUserRecipeToHtml = userRecipeCard({recipe: data.body})
  $('#displayContainer').html(addUserRecipeToHtml)
}

const getRecipesFail = function () {
  pageUi.loginScreen()
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
