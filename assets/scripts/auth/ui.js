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
  $('#message').text('Successfully Signed In!')
  store.user = response.user
}

const onSignInFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign In Failed!')
}

const onChangePasswordSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Changed Password Successfully')
}

const onChangePasswordFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Change Password Attempt Failed!')
}

const onSignOutSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('Signed Out Successfully')
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
