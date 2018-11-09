const db = require('../models');

module.exports = function(app) {
  app.get('/api/product', function(req, res) {
    db.Products.findAll({}).then(function(rows) {
      res.json(rows)
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  app.post('/api/product', function(req, res) {
    db.Products.create(req.body).then(function(rows) {
      res.json({ success: true });
    }).catch(function(error) {
      res.json({ error: error })
    })
  });
}
