var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    var db = req.app.get('db')
  
    db('users')
      .select()
      .then(data => {
        res.render('index', {data})
      })
  
      .catch(function (err) {
        res.send('Something went wrong!')
        console.error(err)
      })
  })

module.exports = router
