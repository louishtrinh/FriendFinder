var quiz = require('../app/data/friends')

module.exports = function (app) {
  app.get('/api/quiz', function (req, res) {
    res.json(quiz)
  })

  app.post('/api/quiz', function (req, res) {
    quiz.push(req.body)
    res.json(true)
  })

//   app.post('/api/clear', function (req, res) {
//     // Empty out the arrays of data
//     tableData.length = []
//     waitListData.length = []

//     res.json({ ok: true })
//   })
}
