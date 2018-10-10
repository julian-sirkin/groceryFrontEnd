'use strict'
const store = require('../store.js')
const pageView = require('../page_view/ui_page.js')

const signUpFail = function () {
  clearInputFields()
}

const logInSuccess = function (data) {
  store.user = data.user
  clearInputFields()
  pageView.loginScreen()
}

const logInFail = function () {
  clearInputFields()
}

const logOutSuccess = function () {
  clearInputFields()
  $('.duck-right').removeClass('hide')
  $('.duck-left').removeClass('hide')
}

const logOutFail = function () {
  clearInputFields()
}

const changePasswordSuccess = function () {
  clearInputFields()
}

const changePasswordFail = function () {
  clearInputFields()
}

const clearInputFields = function () {
  $('#change-pw-form input[name="passwords[old]"]').val('')
  $('#change-pw-form input[name="passwords[new]"]').val('')
  $('#signup input[name="credentials[email]').val('')
  $('#signup input[name="credentials[password]').val('')
  $('#signup input[name="credentials[password_confirmation]').val('')
  $('#login input[name="credentials[email]"]').val('')
  $('#login input[name="credentials[password]"]').val('')
}

module.exports = {
  signUpFail,
  logInSuccess,
  logInFail,
  logOutSuccess,
  logOutFail,
  changePasswordSuccess,
  changePasswordFail,
  clearInputFields
}
