'use strict'

const blankScreen = function () {
$('#navBar, #card-login, #card-signup, #userNav, #card-changePW').addClass('hidden')
$('#displayContainer').html('')
}

const loginScreen = function () {
  blankScreen()
  $('#navBar, #userNav').removeClass('hidden')
}

  module.exports = {
    loginScreen,
    blankScreen
  }
