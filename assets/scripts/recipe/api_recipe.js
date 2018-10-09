'use strict'
const config = require('../config.js')
//const store = require('../store.js')


const searchEdanam = function (data) {
  console.log(data, 'info going to api')
  return $.ajax({
    url: config.apiUrl + '/edaman',
    method: 'GET',
    dataType: 'json',
    data
  })
}



module.exports = {
  searchEdanam
}
