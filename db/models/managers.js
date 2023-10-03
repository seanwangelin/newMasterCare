const client = require('../client');

async function createManager({
    name,
    title
  }) {
    try {
      const {
        rows: [manager],
      } = await client.query(
        `
        INSERT INTO propMgrs(name, title)
        VALUES ($1,$2)
        returning *;
        `,
        [
          name,
          title
        ]
      );
  
      return manager;
  
    } catch (error) {
      throw error;
    }
  }
  
  module.exports = {
    createManager
  }