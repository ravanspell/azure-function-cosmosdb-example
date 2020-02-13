const { CosmosClient } = require("@azure/cosmos");

const endpoint = process.env.endpoint; // Add your endpoint
const key = process.env.key; // Add the primary key of the endpoint
const client = new CosmosClient({ endpoint, key });

module.exports = async (context, req) => {
    // const item = req.body;

    const dbResponse = await client.databases.createIfNotExists({
        id: 'ireshan'
    })
    const database = dbResponse.database
    const coResponse = await database.containers.createIfNotExists({
        id: 'users'
    })
    const container = coResponse.container;
    const { resource: doc } = await container.items.create({ name: "ireshan" });
    context.log.info(doc);
};