'use strict'

const blankScreen = function () {
$('#navBar, #card-login, #card-signup').addClass('hidden')
}

const loginScreen = function () {
  blankScreen()
  $('#navBar').removeClass('hidden')
}

  module.exports = {
    loginScreen,
    blankScreen
  }
