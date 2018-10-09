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




const eventHandler = function () {
$('#navbarSearch').on('submit', onSearchEdanam)
}


module.exports = {
eventHandler
}
