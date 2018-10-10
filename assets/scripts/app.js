'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const auth = require('./auth/events-auth.js')
const recipe = require('./recipe/events_recipe.js')
const pageView = require('./page_view/events_page.js')

$(() => {
  auth.authEventHandler()
  recipe.eventHandler()
  pageView.eventHandler()
})
