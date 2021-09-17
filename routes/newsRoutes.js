const express = require('express');
const newsController = require('./../controllers/newsController');

const router = express.Router();

// router.param('id', tourController.checkID);

// router
//   .route('/top-5-cheap')
//   .get(tourController.aliasTopTours, tourController.getAllTours);

// router.route('/tour-stats').get(tourController.getTourStats);
// router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/')
  .get(newsController.getAllNews)
  .post(newsController.createNews);
// router.route('/:pgno').get(newsController.getAllNews);
router
  .route('/:id')
  .get(newsController.getNews)
  .patch(newsController.updateNews)
  .delete(newsController.deleteNews);

module.exports = router;