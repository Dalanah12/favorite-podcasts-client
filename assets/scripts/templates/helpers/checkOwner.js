const store = require('../../store.js')

const checkOwner = function (podcastOwner) {
  return store.user._id === podcastOwner
}

module.exports = checkOwner
