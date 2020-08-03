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

const createReview = function (data, podcastId) {
  return $.ajax({
    url: config.apiUrl + '/podcasts/' + podcastId + '/reviews',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      reviews: {
        title: data.podcast.title,
        content: data.podcast.content
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

const updateRate = function (data, podcastId) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/podcasts/' + podcastId,
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
    url: config.apiUrl + '/podcasts/' + podcastId,
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
  updateRate,
  createReview
}
