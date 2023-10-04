const client = require('../client');

async function createManager({
    name,
    title,
    phone,
    email
  }) {
    try {
      const {
        rows: [manager],
      } = await client.query(
        `
        INSERT INTO propMgrs(name, title, phone, email)
        VALUES ($1,$2, $3, $4)
        returning *;
        `,
        [
          name,
          title,
          phone,
          email
        ]
      );
  
      return manager;
  
    } catch (error) {
      throw error;
    }
  }

  async function getAllManagers() {
    try {
      const { rows } = await client.query(`
      SELECT * FROM propMgrs;
      `);

      return rows;
    } catch(err) {
      throw err;
    }
  }
  
  module.exports = {
    createManager,
    getAllManagers
  }