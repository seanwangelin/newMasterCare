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

module.exports = {
    createDescription
}