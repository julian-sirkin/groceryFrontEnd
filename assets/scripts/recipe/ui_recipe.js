'use strict'
const recipeCard = require('../../../templates/recipeCard.handlebars')



const searchEdananmSuccess = function (data) {
  console.log(data.body)
  const addRecipeToHtml = recipeCard({ recipes: data.body})
  $('#displayContainer').html(addRecipeToHtml)
}

const searchEdanamFail = function () {
  alert('failed to get info, time to debug')
}


module.exports = {
  searchEdananmSuccess,
  searchEdanamFail
}
