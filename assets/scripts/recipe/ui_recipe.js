'use strict'

const searchEdananmSuccess = function (data) {
  alert('got info back')
  console.log(data)
}

const searchEdanamFail = function () {
  alert('failed to get info, time to debug')
}


module.exports = {
  searchEdananmSuccess,
  searchEdanamFail
}
