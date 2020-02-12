const { CosmosClient } = require("@azure/cosmos");

const endpoint = "https://ireshan-cosmos-1.documents.azure.com:443/"; // Add your endpoint
const key = "RQ1WNlQJXzuyxcmPLWjorzGhBsPFaV2ou1II22IvDMSlWFEjoVMB0rG2vPcIwKyPX12qhixnhrEnDpJ9LDSPLA=="; // Add the masterkey of the endpoint
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