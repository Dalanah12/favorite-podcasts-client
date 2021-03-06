'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./podcast-api')
const ui = require('./podcast-ui')

const onAddPodcast = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.addPodcast(data)
    .then(ui.addPodcastSuccess)
    .catch(ui.addPodcastFailure)
}

const onCreateReview = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  const podcastId = $(event.target).data('id')
  api.createReview(data, podcastId)
    .then(ui.onCreateReviewSuccess)
    .catch(ui.onCreateReviewFailure)
}

const onGetAllPods = function (event) {
  event.preventDefault()

  api.getAllPods()
    .then(ui.getAllPodsSuccess)
    .catch(ui.getAllPodsFailure)
}

const onDeletePod = function (event) {
  event.preventDefault()
  const podcastId = $(event.target).data('id')
  api.deletePodcast(podcastId)
    .then(() => ui.deletePodcastSuccess(podcastId))
    .catch(ui.deletePodcastFailure)
}

const onUpdateRate = function (event) {
  event.preventDefault()
  const podcastId = $(event.target).data('id')
  const form = event.target
  const data = getFormFields(form)
  api.updateRate(data, podcastId)
    .then(ui.onUpdateRateSuccess)
    .catch(ui.onUpdateRateFailure)
}
module.exports = {
  onAddPodcast,
  onGetAllPods,
  onDeletePod,
  onUpdateRate,
  onCreateReview
}
