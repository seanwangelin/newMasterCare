const client = require("../client");

const createService = async ({ service }) => {
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
    );

    return services;
  } catch (err) {
    throw err;
  }
};

const deleteService = async (serviceID) => {
  try {
    const {
      rows: [service],
    } = await client.query(
      `
            DELETE FROM services WHERE services.id = $1
            RETURNING *;
        `,
      [serviceID]
    );

    if (!service) {
      throw {
        name: "ServiceNotFound",
        message: "Could not find a service with that name",
      };
    }

    return service;
  } catch (err) {
    throw err;
  }
};

async function getAllServices() {
  try {
    const { rows } = await client.query(`
      SELECT * FROM services;
      `);

    return rows;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  createService,
  getAllServices,
  deleteService,
};
