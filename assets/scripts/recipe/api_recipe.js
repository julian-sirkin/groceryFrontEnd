'use strict'
const config = require('../config.js')
const store = require('../store.js')


const searchEdanam = function (data) {
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

const getRecipes = function () {
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}


module.exports = {
  searchEdanam,
  saveRecipe,
  getRecipes
}
