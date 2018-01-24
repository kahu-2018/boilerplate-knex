const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', { users: users })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/profiles/:id', (req, res) => {
  // var db = req.app.get('db')
  var userId = req.params.id
  console.log("hello")
  db.getProfile(userId)
    .then(data => {
    res.render('profile', {data})
    })
    .catch(function (err) {
    res.send('Something went wrong!')
    console.error(err)
    })

})

module.exports = router

