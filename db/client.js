// Connect to DB
const { Client } = require('pg');

// change the DB_NAME string to whatever your group decides on
const DB_NAME = 'mastercare';

const DB_URL =
  process.env.DATABASE_URL || `postgres://mastercare_user:2YL5Wr8Fg7RyMVN6TO0zoiWdeeIwsUIK@dpg-cmf1lu6d3nmc739d844g-a.oregon-postgres.render.com/${DB_NAME}?ssl=true`;

let client;

// github actions client config
if (process.env.CI) {
  client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres',
  });
} else {
  // local / heroku client config
  client = new Client(DB_URL);
}

module.exports = client;
