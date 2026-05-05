const { Router } = require('express');

const router = Router();

const messages = [
  {
    id: 1,
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    id: 2,
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

router.get('/', (req, res) => {
  res.render('index', { messages: messages });
});

router.get('/new', (req, res) => {
  res.render('form');
});

router.get('/:id', (req, res) => {
  const message = messages.find(
    (message) => message.id === parseInt(req.params.id),
  );
  res.render('details', { message });
});

router.post('/new', (req, res) => {
  messages.push({
    id: messages.length + 1,
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = router;
