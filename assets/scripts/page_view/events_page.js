'use strict'
const pageUi = require('./ui_page.js')

const toSignup = function () {
  pageUi.blankScreen()
  $('#card-signup').removeClass('hidden')
}

const toLogin = function () {
  pageUi.blankScreen()
  $('#card-login').removeClass('hidden')
}


const eventHandler = function () {
$('#toSignup').on('click', toSignup)
$('#toLogin').on('click', toLogin)
}

module.exports = {
eventHandler
}
