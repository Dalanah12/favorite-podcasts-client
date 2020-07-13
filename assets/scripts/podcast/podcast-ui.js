'use strict'

const store = require('./../store')
const showPodsHandle = require('./../templates/podcast.handlebars')

const addPodcastSuccess = function (response) {
  $('form').trigger('reset')
  $('#pod-message').text('Podcast added to your favorites!').fadeOut(1000)
  store.podcast = response.podcast
}

const addPodcastFailure = function (response) {
  $('#pod-message').text('Oops! There was a mistake adding your podcast. Try Again!')
}

const getAllPodsSuccess = function (response) {
  const showPodsHtml = showPodsHandle({ podcasts: response.podcasts })
  $('.content').html(showPodsHtml)
  $('#pod-message').text('Here are you favorite podcasts!').fadeOut(1000)
}

const getAllPodsFailure = function (response) {
  $('#pod-message').text('Failed to show podcasts! Try Again!')
}

const deletePodcastSuccess = function (podcastId) {
  $('#pod-message').text('Podcast Successfully Deleted').fadeOut(1000)
  $(`[data-id='${podcastId}']`).remove()
}

const deletePodcastFailure = function () {
  $('#pod-message').text('Uh-Oh Delete Failed. Try Again!')
}

const onUpdateRateSuccess = function () {
  $('#pod.message').text('Rating Updated!').fadeOut(1000)
}

const onUpdateRateFailure = function () {
  $('#pod-message').text('Rating Update Unsuccessful. Try Again')
}

module.exports = {
  addPodcastSuccess,
  addPodcastFailure,
  getAllPodsSuccess,
  getAllPodsFailure,
  deletePodcastSuccess,
  deletePodcastFailure,
  onUpdateRateSuccess,
  onUpdateRateFailure
}
