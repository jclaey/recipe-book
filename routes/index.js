const express = require('express'),
      router = express.Router();

router.get('/', (req, res) => {
  res.send('INDEX');
});

router.get('/about', (req, res) => {
  res.send('ABOUT');
});

module.exports = router;