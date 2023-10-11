const client = require('../client');

const createDescription = async ({title, description}) => {
    try {
        const {
            rows: [descriptions],
        } = await client.query(
            `
            INSERT INTO descriptions(title, description)
            VALUES($1,$2)
            returning *;
            `,
            [title, description]
        )

        return descriptions;
    } catch(err) {
        throw err;
    }
}

async function getAllDescriptions() {
    try {
      const { rows } = await client.query(`
      SELECT * FROM descriptions;
      `);

      return rows;
    } catch(err) {
      throw err;
    }
  }

module.exports = {
    createDescription,
    getAllDescriptions
}