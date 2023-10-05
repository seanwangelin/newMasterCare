const {
  client,
  User,
  PropMgrs,
  // declare your model imports here
  // for example, User
} = require("./");

async function buildTables() {
  try {
    client.connect();

    // drop tables in correct order
    await client.query(`
      drop table if exists users;
      drop table if exists propMgrs;
      drop table if exists descriptions;

      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username varchar(15) UNIQUE NOT NULL,
        password varchar(255) NOT NULL,
        isAdmin BOOLEAN DEFAULT false
      );

      CREATE TABLE propMgrs (
        id SERIAL PRIMARY KEY,
        name varchar(255) NOT NULL,
        title varchar(255),
        phone varchar(255) NOT NULL,
        email varchar(255)NOT NULL
      );

      CREATE TABLE descriptions (
        id SERIAL PRIMARY KEY,
        description text
      );
    `);

    // build tables in correct order
  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
    // create useful starting data by leveraging your
    // Model.method() adapters to seed your db, for example:
    // const user1 = await User.createUser({ ...user info goes here... })

    const createInitialUsers = async () => {
      console.log("starting to create users...");

      const usersToCreate = [
        {
          username: "admin",
          password: "Mastercare41!",
          isAdmin: true,
        },
      ];
      const users = await Promise.all(usersToCreate.map(User.createUser));
      console.log("users create: ", users);
      console.log("finished creating users");
    };

    const createInitialPropMgrs = async () => {
      console.log("starting to create property managers...");
      const propMgrsToCreate = [
        {
          name: "Patty Elmore",
          phone: 7088763208,
          email: 'patty@mcareservices.com'
        },
        {
          name: "Bill Planek",
          phone: 7083582634,
          email: 'bill@mcareservices.com'
        },
        {
          name: "Barry Dodero",
          phone: 7086229248,
          email: 'barry@mcareservices.com'
        },
        {
          name: "Mike Vitek",
          phone: 7084068650,
          email: 'mikevitek@mcareservices.com'
        },
        {
          name: "Ryan Reid",
          title: "Administrative Assistant",
          phone: 7086229245,
          email: 'ryan@mcareservices.com'
        },
      ];
      const propMgrs = await Promise.all(
        propMgrsToCreate.map(PropMgrs.createManager)
      );
      console.log("property managers created: ", propMgrs);
      console.log("finished creating property managers");
    };

    await createInitialUsers();
    await createInitialPropMgrs();
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
