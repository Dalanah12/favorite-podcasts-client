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

const getAllPods = function (data) {
  return $.ajax({
    url: config.apiUrl + '/podcasts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateRate = function (data) {
  return $.ajax({
    url: config.apiUrl + '/podcasts/' + data.podcast.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      podcast: {
        rating: data.podcast.rating
      }
    }
  })
}

const deletePodcast = function (podcastId) {
  return $.ajax({
    url: config.apiUrl + '/podcasts' + podcastId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  addPodcast,
  getAllPods,
  deletePodcast,
  updateRate
}
