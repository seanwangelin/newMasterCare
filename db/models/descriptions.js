const client = require("../client");

const createDescription = async ({ title, description }) => {
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
    );

    return descriptions;
  } catch (err) {
    throw err;
  }
};

const deleteDescription = async (descriptionID) => {
  try {
    const {
      rows: [description],
    } = await client.query(
      `
              DELETE FROM descriptions WHERE descriptions.id = $1
              RETURNING *;
          `,
      [descriptionID]
    );

    if (!description) {
      throw {
        name: "DescriptionNotFound",
        message: "Could not find a description with that name",
      };
    }

    return description;
  } catch (err) {
    throw err;
  }
};

async function updateDescription(descriptionID, newDescription) {
  try {
    const {
      rows: [description],
    } = await client.query(
      `
      UPDATE descriptions
      SET 
        description=$2
      WHERE
        id=$1
      RETURNING description;
    `,
      [descriptionID, newDescription]
    );

    return description;
  } catch (err) {
    throw err;
  }
}

async function updateDescriptionTitle(descriptionID, newDescriptionTitle) {
  try {
    const {
      rows: [descriptionTitle],
    } = await client.query(
      `
      UPDATE descriptions
      SET 
        title=$2
      WHERE
        id=$1
      RETURNING title;
    `,
      [descriptionID, newDescriptionTitle]
    );

    return descriptionTitle;
  } catch (err) {
    throw err;
  }
}

async function getAllDescriptions() {
  try {
    const { rows } = await client.query(`
      SELECT * FROM descriptions;
      `);

    return rows;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  createDescription,
  getAllDescriptions,
  deleteDescription,
  updateDescription,
  updateDescriptionTitle,
};
