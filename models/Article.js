const mongoose = require('mongoose')
const Article = new mongoose.Schema({
  title : {type:String, trim:true},
  destacado: {type:Boolean, default:false},
  description: {type:String},
  subtitle : {type:String, trim:true},
  content : {type:String},
  photo: {type:String, trim:true},
  subtitle1 : {type:String, trim:true},
  content1 : {type:String},
  photo1: {type:String, trim:true},
  subtitle2: {type:String, trim:true},
  content2: {type:String},
  photo2: {type:String, trim:true},
  subtitle3 : {type:String, trim:true},
  content3 : {type:String},
  photo3: {type:String, trim:true},
  subtitle4 : {type:String, trim:true},
  content4 : {type:String},
  photo4: {type:String, trim:true},
  subtitle5 : {type:String, trim:true},
  content5 : {type:String},
  photo5: {type:String, trim:true},
  subtitle6 : {type:String, trim:true},
  content6 : {type:String},
  photo6: {type:String, trim:true},
  subtitle7 : {type:String, trim:true},
  content7 : {type:String},
  photo7: {type:String, trim:true},
  fuente : {type:String, trim:true},

},{timestamps: true});

module.exports = mongoose.model('article', Article);
