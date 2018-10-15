'use strict'
const recipeCard = require('../../../templates/recipeCard.handlebars')
const userRecipeCard = require('../../../templates/userRecipeCard.handlebars')
const pageUi = require('../page_view/ui_page')
const store = require('../store.js')



const searchEdananmSuccess = function (data) {
  pageUi.loginScreen()
  const addRecipeToHtml = recipeCard({recipes: data.body})
  $('#displayContainer').html(addRecipeToHtml)
}

const searchEdanamFail = function () {
  $('displayContainer').html('<h3>Please try again</h3>')
}

const saveRecipeSuccess = function () {
$('#userMessages').html('<h4>Recipe Saved to List</h4>')
}

const saveRecipeFail = function () {
  $('displayContainer').html('<h3>Please try again</h3>')
}

const getRecipesSuccess = function (data) {
  pageUi.loginScreen()
  store.userRecipes = data.body
  const addUserRecipeToHtml = userRecipeCard({recipe: data.body})
  $('#displayContainer').html(addUserRecipeToHtml)
}

const getRecipesFail = function () {
  pageUi.loginScreen()
  $('#userMessages').html('<h4>Unable to get recipes, try again! </h4>')
}

const deleteRecipeSuccess = function () {
  $('#userMessages').html('<h4>The Recipe has been removed from your list</h4>')
}

const deleteRecipeFail = function () {
  $('#userMessages').html('<h4>Unable to remove recipe from the list recipes, try again! </h4>')
}

const buyIngredientsFail = function () {
  $('#userMessages').html('<h4>Unable to load Amazon</h4>')
}
const buyIngredientsSuccsess = function (data) {
}

const alreadySaved = function () {
  $('#userMessages').html('<h4>Already saved the recipe</h4>')
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
  buyIngredientsSuccsess,
  alreadySaved
}
