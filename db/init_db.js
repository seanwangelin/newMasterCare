const {
  client,
  User,
  PropMgrs,
  Descriptions
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
        title varchar(255) NOT NULL,
        description text NOT NULL
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

    const createInitialDescriptions = async () => {
      console.log('starting to create descriptions...')
      const descriptionsToCreate = [
        {
          title: "Our mission statement",
          description: "Our Mission, as your premier provider of condominium management and maintenance services, is to provide individualized attention to the preservation and care of your property as well as implementation of cost effective policies and procedures to ensure the fiscal health of your Association."
        },
        {
          title: "Welcome to Mastercare Building Services Inc",
          description: "Mastercare is a full service property management company serving the Oak Park, River Forest and Forest Park communities. With over 32 years of experience in condominium management, Mastercare's dedicated service and individualized attention is the best choice for all of your property management needs."
        },
        {
          title: "Our Approach",
          description: "The Mastercare philosophy is to operate each property from the owners perspective, with a vital awareness of the goals and requests of board members and residents. Mastercare is a full service building management company committed to providing professional, cost effective and efficient property management services. We have an in-depth personal understanding of the needs of our clients property because we are property owners ourselves."
        },
        {
          title: "Our Experience",
          description: "Founded in 1986, Mastercare has over 28 years of property management experience. Our team of professionals are highly qualified and offer a broad range of experience, techical expertise and strong customer service. The team includes skilled account managers, attentive building engineers, reliable maintenance personnel, and dedicated property supervisors whose track-record and understanding of the business are critical to the success of your association."
        },
        {
          title: "Community Involvement",
          description: "Mastercare is commited to the local communities we serve. We believe that giving back is an important part of our company culture. Whether we sponsor local youth baseball, volunteer baking cookies in a solar oven at A Day in Our Village, try our hand at making Farmer's Market donuts, hit the links for a local charity or donate to one of the multiple worthy community organizations, we know that involvement and support is what helps communities thrive."
        }
      ]
      const descriptions = await Promise.all(
        descriptionsToCreate.map(Descriptions.createDescription)
      );
      console.log("descriptions created: ", descriptions)
      console.log('finsished creating descriptions')
    }

    await createInitialUsers();
    await createInitialPropMgrs();
    await createInitialDescriptions();
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
