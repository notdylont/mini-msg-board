const pool = require('../db/pool');

async function getMessages() {
  const { rows } = await pool.query(`SELECT * FROM messages`);
  return rows;
}

async function getMessage(id) {
  const { rows } = await pool.query(`SELECT * FROM messages WHERE id = $1`, [
    id,
  ]);
  return rows;
}

async function insertMessage(user, msg) {
  await pool.query(
    `INSERT INTO messages (username, message, added) 
                        VALUES ($1, $2, NOW())`,
    [user, msg],
  );
}

module.exports = {
  getMessages,
  getMessage,
  insertMessage,
};
