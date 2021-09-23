module.exports = (router, app) => {
  router.route('/').get((req, res) => {
    const model = require('models/global')(req, res)
    model.content.pageTitle = '{content.appTitle} - Homepage'
    model.content.hello = 'Hi! I\'m a variable trickling down through the MVC structure!'
    model.content.picLabel = 'Here\'s a silly picture of Teddy Roosevelt:'
    model.teddyPath = '/images/teddy.jpg'
    model.objects = [{a:1, b:2, c:3}, {a:4, b:5, c:6}, {a:7, b:8, c:9}];
    model.array = ['tests', 'tests3', 'test2s','test1']
    res.render('homepage', model)
  })
}
