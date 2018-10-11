'use strict'

const blankScreen = function () {
$('#navBar, #card-login, #card-signup, #userNav').addClass('hidden')
}

const loginScreen = function () {
  blankScreen()
  $('#navBar, #userNav').removeClass('hidden')
}

  module.exports = {
    loginScreen,
    blankScreen
  }
