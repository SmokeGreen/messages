var express = require('express');
var router = express.Router();
var members = [
  'alice',
  'bob',
  'mary'
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('front', {
    title: 'Front',
    members: members
  });
});

module.exports = router;
