'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api-auth.js')
const ui = require('./ui-auth.js')
const store = require('../store.js')
const recipeEvents = require('../recipe/events_recipe.js')


// Event after sign up form is submitted
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.credentials = data
  api.signUp(data)
    .then(signInAfterSignUp)
    .catch(ui.signUpFail)
}
// After Api Call from sign up, if successful, then runs this to log in
const signInAfterSignUp = function () {
  delete store.credentials.password_confirmation
  const credentials = store.credentials
  api.logIn(credentials)
    .then(ui.logInSuccess)
    .then(recipeEvents.onGetRecipes)
    .catch(ui.logInFail)
}
// Event after sign in form is submitted
const onLogin = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.logIn(data)
    .then(ui.logInSuccess)
    .then(recipeEvents.onGetRecipes)
    .catch(ui.logInFail)
}
// After logout button is clicked
const onLogOut = function (event) {
  event.preventDefault()
  api.logOut()
    .then(ui.logOutSuccess)
    .catch(ui.logOutFail)
}
// Event after change password form is submitted
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFail)
}

const authEventHandler = function () {
  $('#signup').on('submit', onSignUp)
  $('#login').on('submit', onLogin)
  $('#logout').on('click', onLogOut)
  $('#to-signout').on('click', onLogOut)
  $('#updatePassword').on('submit', onChangePassword)
}

module.exports = {
  authEventHandler
}
