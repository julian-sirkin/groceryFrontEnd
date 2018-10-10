'use strict'
const config = require('../config.js')
const store = require('../store.js')


const searchEdanam = function (data) {
  console.log(data, 'data on search')
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
const deleteRecipe = function (data) {
  return $.ajax({
    url: config.apiUrl + '/recipes/' + data,
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const buyIngredients = function (data) {
  return $.ajax({
    url: config.apiUrl + '/amazonshopping',
    method: 'POST',
    dataType: 'json',
    data
  })
}

module.exports = {
  searchEdanam,
  saveRecipe,
  getRecipes,
  deleteRecipe,
  buyIngredients
}
