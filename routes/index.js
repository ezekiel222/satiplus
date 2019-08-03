var express = require('express');
var router = express.Router();
const Articles = require('../models/Article')

/* GET home page. */
router.get('/', async(req, res, next) => {
  const query = req.query;
  let destacados = await Articles.find({destacado:true}).sort({updatedAt: 'desc'}).limit(5)
  Articles.find(query).sort({updatedAt: 'desc'}).limit(6)
  .then(data =>{
    res.render('index', {articles:data, destacados:destacados})
  })
  .catch(err => {
    res.json({
      confirmation: "Fail",
      error: err.message
    });
  });
});

module.exports = router;
