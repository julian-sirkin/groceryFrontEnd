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



const eventHandler = function () {
$('#navbarSearch').on('submit', onSearchEdanam)
$('#displayContainer').on('click', 'button.saveRecipe', onSaveRecipe)
}


module.exports = {
eventHandler
}
