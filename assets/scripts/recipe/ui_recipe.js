'use strict'
const recipeCard = require('../../../templates/recipeCard.handlebars')



const searchEdananmSuccess = function (data) {
  const addRecipeToHtml = recipeCard({ recipes: data.body})
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
  console.log(data)
  alert('I got the recipes')
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
