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
const toChangePW = function () {
  pageUi.loginScreen()
  $('#card-changePW').removeClass('hidden')
}

const noChangePW = function () {
  pageUi.loginScreen()
}

const eventHandler = function () {
$('#toSignup').on('click', toSignup)
$('#toLogin').on('click', toLogin)
$('#toChangePW').on('click', toChangePW)
$('#noChangePW').on('click', noChangePW)
}

module.exports = {
eventHandler
}
