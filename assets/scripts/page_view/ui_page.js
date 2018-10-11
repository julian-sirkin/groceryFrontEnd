'use strict'

const blankScreen = function () {
$('#navBar, #card-login, #card-signup, #userNav, #card-changePW, #userMessages').addClass('hidden')
$('#displayContainer, #userMessages').html('')
}

const loginScreen = function () {
  blankScreen()
  $('#navBar, #userNav, #userMessages').removeClass('hidden')
}

  module.exports = {
    loginScreen,
    blankScreen
  }
