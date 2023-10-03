// grab our db client connection to use with our adapters
const client = require('../client');

module.exports = {
  // add your database adapter fns here
  getAllUsers,
  createUser
};

async function getAllUsers() {
  /* this adapter should fetch a list of users from your db */
}

async function createUser({
  username,
  password,
  isAdmin
}) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      INSERT INTO users(username, password, isAdmin)
      VALUES ($1,$2, $3)
      ON CONFLICT (username) DO NOTHING
      returning *;
      `,
      [
        username,
        password,
        isAdmin
      ]
    );

    return user;

  } catch (error) {
    throw error;
  }
}
