const db = require('../db/queries');

async function getMessages(req, res) {
  const msgs = await db.getMessages();
  res.render('index', { messages: msgs });
}

function newFormGet(req, res) {
  res.render('form');
}

async function newFormPost(req, res) {
  await db.insertMessage(req.body.user, req.body.message);
  res.redirect('/');
}

async function getDetails(req, res) {
  const msg = await db.getMessage(req.params.id);
  res.render('details', { message: msg[0] });
}

module.exports = {
  getMessages,
  newFormGet,
  newFormPost,
  getDetails,
};
