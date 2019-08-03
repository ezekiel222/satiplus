var express = require('express');
var router = express.Router();
const Articles = require('../models/Article')

/* GET home page. */
router.get('/', function(req, res, next) {
  const query = req.query;
  Articles.find(query).sort({updatedAt: 'desc'}).limit(6)
  .then(data =>{
    res.render('index', {articles:data})
  })
  .catch(err => {
    res.json({
      confirmation: "Fail",
      error: err.message
    });
  });
});

module.exports = router;
