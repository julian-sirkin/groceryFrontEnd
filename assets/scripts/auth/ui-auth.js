'use strict'
const store = require('../store.js')
const pageView = require('../page_view/ui_page.js')

const signUpFail = function () {
  clearInputFields()
  $('#userMessages').html('<h4> Failed to sign up, please try again </h4>')
}

const logInSuccess = function (data) {
  store.user = data.user
  clearInputFields()
  pageView.loginScreen()
}

const logInFail = function () {
  $('#userMessages').html('<h4> Failed to login, please try again </h4>')
  clearInputFields()
}

const logOutSuccess = function () {
  clearInputFields()
  pageView.blankScreen()
  $('#card-login').removeClass('hidden')
}

const logOutFail = function () {
  clearInputFields()
}

const changePasswordSuccess = function () {
  $('#userMessages').html('<h4>Password has been changed </h4>')

  clearInputFields()
}

const changePasswordFail = function () {
  $('#userMessages').html('<h4> Unable to change passwords, please try again </h4>')

  clearInputFields()
}

const clearInputFields = function () {
  $('#updatePassword input[name="passwords[old]"]').val('')
  $('#updatePassword input[name="passwords[new]"]').val('')
  $('#signup input[name="credentials[email]').val('')
  $('#signup input[name="credentials[password]').val('')
  $('#signup input[name="credentials[password_confirmation]').val('')
  $('#login input[name="credentials[email]"]').val('')
  $('#login input[name="credentials[password]"]').val('')
  $('#navbarSearch input').val('')
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
