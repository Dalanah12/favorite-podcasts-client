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

module.exports = {
  onAddPodcast
}
