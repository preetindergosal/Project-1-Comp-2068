const router = require('express').Router();

// controllers
const beersController = require('../controllers/beersController');

// routes
router.get(`/new`, beersController.new);
router.get(`/drafts`, beersController.drafts);
router.get(`/published`, beersController.published);
router.get(`/`, beersController.index);
router.get(`/:id`, beersController.show);
router.post(`/`, beersController.create);
router.get(`/:id/edit`, beersController.edit);
router.post(`/update`, beersController.update);
router.post(`/destroy`, beersController.destroy);

module.exports = router;