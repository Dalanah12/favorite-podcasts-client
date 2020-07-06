'use strict'

const store = require('./../store')

const addPodcastSuccess = function (response) {
  $('form').trigger('reset')
  $('#pod-message').text('Podcast added to your favorites!')
  store.podcast = response.podcast
}

const addPodcastFailure = function (response) {
  $('pod-message').text('Oops! There was a mistake adding your podcast. Try Again!')
}

module.exports = {
  addPodcastSuccess,
  addPodcastFailure
}
