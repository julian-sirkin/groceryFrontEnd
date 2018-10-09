'use strict'
const config = require('../config.js')
const store = require('../store.js')


const searchEdanam = function (data) {
  console.log(data, 'info going to api')
  return $.ajax({
    url: config.apiUrl + '/edaman',
    method: 'GET',
    dataType: 'json',
    data
  })
}

const saveRecipe = function (data) {
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}


module.exports = {
  searchEdanam,
  saveRecipe
}
