'use strict'
const recipeCard = require('../../../templates/recipeCard.handlebars')
const userRecipeCard = require('../../../templates/userRecipeCard.handlebars')


const searchEdananmSuccess = function (data) {
  console.log(data.body)
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
  console.log(data.body[0])
  const addUserRecipeToHtml = userRecipeCard({recipe: data.body})
  $('#displayContainer').html(addUserRecipeToHtml)
}

const getRecipesFail = function () {
  alert('No recipes for you!')
}

module.exports = {
  searchEdananmSuccess,
  searchEdanamFail,
  saveRecipeSuccess,
  saveRecipeFail,
  getRecipesSuccess,
  getRecipesFail
}
