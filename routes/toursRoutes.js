// routes/toursRoutes.js
const express = require('express');
const router = express.Router();
const toursController = require('../controllers/toursController');

router.post('/', toursController.createTour);
router.get('/', toursController.getAllTours);
router.get('/:id', toursController.getTourById);
router.put('/:id', toursController.updateTour);
router.delete('/:id', toursController.deleteTour);

module.exports = router;
