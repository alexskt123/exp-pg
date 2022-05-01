var express = require('express');
var router = new express.Router();

router.get('/user', function (req, res, next) {
   //code 
   res.send({
      user: 'ABC',
      name: 'GGGG'
   });
   console.log('aa')
   next();
});

module.exports = router;
