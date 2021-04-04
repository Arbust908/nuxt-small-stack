const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController');

// isValidID Middleware
router.param('id', tourController.validateID);

router
  .route(`/`)
  .get(tourController.getAllTours)
  .post(tourController.validateBody, tourController.postTours);

router
  .route(`/:id`)
  .get(tourController.getTourById)
  .patch(tourController.patchTourById)
  .delete(tourController.deleteTourById);

module.exports = router;
