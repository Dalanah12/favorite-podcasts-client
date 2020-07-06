'use strict'

const store = require('./../store')
const showPodsHandle = require('./../templates/podcast.handlebars')

const addPodcastSuccess = function (response) {
  $('form').trigger('reset')
  $('#pod-message').text('Podcast added to your favorites!')
  store.podcast = response.podcast
}

const addPodcastFailure = function (response) {
  $('#pod-message').text('Oops! There was a mistake adding your podcast. Try Again!')
}

const getAllPodsSuccess = function (response) {
  const showPodsHtml = showPodsHandle({ podcasts: response.podcast })
  $('.content').html(showPodsHtml)
  $('#pod-message').text('Here are you favorite podcasts!')
}

const getAllPodsFailure = function (response) {
  $('#pod-message').text('Failed to show podcasts! Try Again!')
}
module.exports = {
  addPodcastSuccess,
  addPodcastFailure,
  getAllPodsSuccess,
  getAllPodsFailure
}
