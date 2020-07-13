'use strict'

const authEvents = require('./auth/events')
const podEvents = require('./podcast/podcast-events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#auth-two').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#pod-one').hide()
  $('#add-podcast').on('submit', podEvents.onAddPodcast)
  $('#get-podcasts').on('submit', podEvents.onGetAllPods)
  $('.content').on('click', '.btn-danger', podEvents.onDeletePod)
  $('#update').on('click', podEvents.onUpdateRates)
})

module.exports = {
  authEvents,
  podEvents
}
