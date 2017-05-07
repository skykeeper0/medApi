const express = require('express');

const router = express.Router();
const articleController = require('../controllers/topicController');

router.get('/', topicController.getAll);
router.get('/:id', topicController.getOne);
// router.post('/', videosController.addOne);
// router.put('/:id', videosController.updateOne);

module.exports = router;