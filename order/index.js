var express = require('express');
var router = new express.Router();

router.get('/order', function (req, res) {
  //code
  res.send('order');
});

module.exports = router;
