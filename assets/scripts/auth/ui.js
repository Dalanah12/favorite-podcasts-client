'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Sign Up Successful' + ' ' + response.user.email)
}

const onSignUpFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign up failed')
}

const onSignInSuccess = function (response) {
  console.log(response)
  $('form').trigger('reset')
  $('#message').text('Successfully Signed In!').fadeOut(900)
  store.user = response.user
  $('#auth-one').hide()
  $('#auth-two').show()
  $('#pod-one').show()
}

const onSignInFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign In Failed!')
}

const onChangePasswordSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Changed Password Successfully').fadeOut(900)
}

const onChangePasswordFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Change Password Attempt Failed!')
}

const onSignOutSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('Signed Out Successfully').fadeOut(900)
  $('#auth-two').hide()
  $('#pod-one').hide()
  $('#auth-one').show()
  $('.content').hide()
}

const onSignOutFailure = function () {
  $('#message').text('Sign Out Failed!')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
