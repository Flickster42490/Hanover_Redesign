var express = require('express');
var router  = express.Router();
var portfolioAll = require('../PortfolioAll.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/test', function (req, res, next) {
  res.render('index_test');
});

router.get('/about', function (req, res, next) {
  res.render('about', {page: "about", headerTitle: 'Hanover At A Glance'});
});

router.get('/contact', function (req, res, next) {
  res.render('contact', {page: "contact", headerTitle: 'Contact Us'});
});

router.get('/home', function (req, res, next) {
  res.render('index');
});

router.get('/login', function (req, res, next) {
  res.render('login');
});

router.get('/portfolio', function (req, res, next) {
  res.render('portfolio', {multiFamily: portfolioAll.multiFamily, netLease: portfolioAll.netLease, page: "portfolio", headerTitle: 'Our Portfolio'});
});

router.get('/portfolio/multi-family', function (req, res, next) {
  res.render('portfolioMultiFamily', {multiFamily: portfolioAll.multiFamily, page: "portfolio", headerTitle: 'Our Portfolio'});
});

router.get('/portfolio/net-lease', function (req, res, next) {
  res.render('portfolioNetLease', {netLease: portfolioAll.netLease, page: "portfolio", headerTitle: 'Our Portfolio'});
});

router.get('/strategies', function (req, res, next) {
  res.render('strategies', {page: "strategies", headerTitle: 'Our Strategies'});
});

router.get('/team', function (req, res, next) {
  res.render('team', {page: "team", headerTitle: 'Our Team'});
});

module.exports = router;
