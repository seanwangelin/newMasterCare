const client = require("../client");

const createManager = async ({name, title, phone, email}) => {
  try {
    const {
      rows: [manager],
    } = await client.query(
      `
        INSERT INTO propMgrs(name, title, phone, email)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
      `,
      [name, title, phone, email]
    );

    if (!manager) {
      throw {
        name: "ManagerNotFound",
        message: "errorrrrrr",
      };
    }
    console.log(manager)
    return manager;
  } catch (error) {
    console.error(error);
  }
};

//this funciton is used to fix a strange error. Curly braces removed from parameters to allow managers to be inserted from the GUI.
const createNewManager = async (name, title, phone, email) => {
  try {
    const {
      rows: [manager],
    } = await client.query(
      `
        INSERT INTO propMgrs(name, title, phone, email)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
      `,
      [name, title, phone, email]
    );

    if (!manager) {
      throw {
        name: "ManagerNotFound",
        message: "errorrrrrr",
      };
    }
    console.log(manager)
    return manager;
  } catch (error) {
    console.error(error);
  }
};

const deleteManager = async (managerID) => {
  try {
    const {
      rows: [manager],
    } = await client.query(
      `
        DELETE FROM propMgrs WHERE propMgrs.id = $1
        RETURNING *;
      `,
      [managerID]
    );

    if (!manager) {
      throw {
        name: "ManagerNotFound",
        message: "Could not find a manager with this ID",
      };
    }

    return manager;
  } catch (err) {
    throw err;
  }
};

const updateManagerName = async (managerID, newName) => {
  try {
    const {
      rows: [managerName],
    } = await client.query(
      `
      UPDATE propMgrs
      SET
        name=$2
      WHERE
        id=$1
      RETURNING name;
    `,
      [managerID, newName]
    );

    return managerName;
  } catch (err) {
    throw err;
  }
};

const updateManagerPhone = async (managerID, newPhone) => {
  try {
    const {
      rows: [managerPhone],
    } = await client.query(
      `
      UPDATE propMgrs
      SET
        phone=$2
      WHERE
        id=$1
      RETURNING phone;
    `,
      [managerID, newPhone]
    );

    return managerPhone;
  } catch (err) {
    throw err;
  }
};

const updateManagerEmail = async (managerID, newEmail) => {
  try {
    const {
      rows: [managerEmail],
    } = await client.query(
      `
      UPDATE propMgrs
      SET
        email=$2
      WHERE
        id=$1
      RETURNING email;
    `,
      [managerID, newEmail]
    );

    return managerEmail;
  } catch (err) {
    throw err;
  }
};

const updateManagerTitle = async (managerID, newTitle) => {
  try {
    const {
      rows: [managerTitle],
    } = await client.query(
      `
      UPDATE propMgrs
      SET
        title=$2
      WHERE
        id=$1
      RETURNING title;
    `,
      [managerID, newTitle]
    );

    return managerTitle;
  } catch (err) {
    throw err;
  }
};

async function getAllManagers() {
  try {
    const { rows } = await client.query(`
      SELECT * FROM propMgrs;
      `);

    return rows;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  createManager,
  createNewManager,
  getAllManagers,
  deleteManager,
  updateManagerName,
  updateManagerPhone,
  updateManagerEmail,
  updateManagerTitle,
};
