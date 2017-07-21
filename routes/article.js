const express = require('express');

const router = express.Router();
const articleController = require('../controllers/articleController');

router.get('/', articleController.getAll);
router.get('/:id', articleController.getOne);
// router.put('/:id', videosController.updateOne);

module.exports = router;
