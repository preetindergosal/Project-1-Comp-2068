const router = require('express').Router();

const PagesController = require('../controllers/pagesController');

router.get(`/`, PagesController.show);
module.exports = router;