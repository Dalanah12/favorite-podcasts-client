'use strict'

const config = require('./../config')
const store = require('./../store')

const addPodcast = function (data) {
  return $.ajax({
    url: config.apiUrl + '/podcasts',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      podcast: {
        title: data.podcast.title,
        topic: data.podcast.topic,
        hosts: data.podcast.hosts,
        rating: data.podcast.rating,
        owner: store.user._id
      }
    }
  })
}

module.exports = {
  addPodcast
}
