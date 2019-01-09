var friends = require('../app/data/tableData')

module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friends)
  })

  app.post('/api/friends', function (req, res) {
    friends.push(req.body)
    res.json(true)
  })

//   app.post('/api/clear', function (req, res) {
//     // Empty out the arrays of data
//     tableData.length = []
//     waitListData.length = []

//     res.json({ ok: true })
//   })
}
