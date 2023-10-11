const client = require('../client');

const createService = async ({service}) => {
    try {
        const {
            rows: [services],
        } = await client.query(
            `
            INSERT INTO services(service)
            VALUES($1)
            returning *;
            `,
            [service]
        )

        return services;
    } catch(err) {
        throw err;
    }
}

async function getAllServices() {
    try {
      const { rows } = await client.query(`
      SELECT * FROM services;
      `);

      return rows;
    } catch(err) {
      throw err;
    }
  }

module.exports = {
    createService,
    getAllServices
}