const { Router } = require('express');
const msgController = require('../controllers/msgController');

const router = Router();

router.get('/', msgController.getMessages);

router.get('/new', msgController.newFormGet);

router.get('/:id', msgController.getDetails);

router.post('/new', msgController.newFormPost);

module.exports = router;
