var express = require('express');
var router = express.Router();
var members = [
  {name:'alice',age:21},
  {name:'bob',age:18},
  {name:'mary',age:12}
];

/* GET home page. */
  router.get('/', function(req, res, next) {
  res.render('front', {
    title: 'Front',
    members: members
  });
});

module.exports = router;
