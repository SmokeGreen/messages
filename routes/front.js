var express = require('express');
var router = express.Router();
var members = [
  {name:'alice',age:21},
  {name:'bob',age:18},
  {name:'mary',age:12},
  {name:'tom',age:12}
];

var title = 'Front';
var time = '1989/04/01 12:00';

/* GET home page. */
  router.get('/', function(req, res, next) {
  res.render('front', {
    title: title,
    time: time,
    members: members
  });
});

module.exports = router;
