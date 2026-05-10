require('dotenv').config();
const { Client } = require('pg');

const SQL = `
CREATE TABLE messages (
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   username VARCHAR ( 255 ), 
   message VARCHAR ( 255 ), 
   added TIMESTAMP 
);  

INSERT INTO messages (username, message, added) VALUES 
('Lebron', 'I don''t read books much', NOW());
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:5432/${process.env.PGDATABASE}?sslmode=true`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
