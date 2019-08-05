var express = require('express');
var router = express.Router();
const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
const Articles = require('../models/Article')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const term = req.query;
  Articles.find(term).sort({updatedAt: 'desc'})
  .then(data =>{
    res.render('articles/articles', {articles:data, title:"Articulos"})
  })
  .catch(err => {
    res.json({
      confirmation: "Fail",
      error: err.message
    });
  });
});

router.get('/search', function(req, res, next) {
  const term = req.query.data;
  Articles.find({$text: {$search:term}}).sort({updatedAt: 'desc'})
  .then(data =>{
    res.render('articles/articles', {articles:data, sear:term, title:"Resultados para '"+term+"'"})
  })
  .catch(err => {
    res.json({
      confirmation: "Fail",
      error: err.message
    });
  });
});

router.post('/search', (req,res) => {
  const search = req.body.search
  res.redirect('/articles/search/?data='+ search)
});

router.get('/h340', function(req,res){
  res.render('articles/new')
});

router.get('/edit-article/:id', function(req,res){
  const id = req.params.id
  Articles.findById(id).then(data => {
    res.render('articles/edit', {article:data})
  });
});
router.post('/edit/:id', function(req,res){
  var new_data = req.body;
  const id = req.params.id;
  Articles.findByIdAndUpdate(id, {new_data}, {new:true}).then(data => {
    res.redirect('/articles/'+data.id)
  });
});
router.post('/new', function(req,res){
  var data = req.body
  var model = new Articles(data);
  model.save();
  res.json(data)
});

router.get('/:id', async (req, res) => {
  let articles1 = await Articles.find().sort({updatedAt: 'desc'}).limit(6)
  const id = req.params.id;
  Articles.findById(id).then(data => {
    res.render('articles/show', {article:data, articles1:articles1, title:data.title, description:data.description})
  });
});

module.exports = router;
