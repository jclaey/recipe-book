const express = require('express'),
      router = express.Router(),
      {
        getIndex,
        getAbout
      } = require('../controllers/index');

router.get('/', getIndex);

router.get('/about', getAbout);

module.exports = router;