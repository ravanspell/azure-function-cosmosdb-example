const cosmosDatabase = require('../dbInit');

module.exports = async (context, req) => {
    // const item = req.body;
    const cosmosService = cosmosDatabase.createCosmosService();
    const database = await cosmosService.initCosmos();

    const coResponse = await database.containers.createIfNotExists({
        id: 'users'
    })
    const container = coResponse.container;
    const { resource: doc } = await container.items.create({ name: "ireshan" });
    context.log.info(doc);
};