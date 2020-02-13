const { CosmosClient } = require("@azure/cosmos");
const endpoint = process.env.endpoint; // Add your endpoint
const key = process.env.key; // Add the primary key of the endpoint
let dbInstance = null;

class Database {
    constructor() {
        this.CosmosClient = CosmosClient;
        this.client = new CosmosClient({ endpoint, key });
    }

    async initCosmos() {
        const dbResponse = await this.client.databases.createIfNotExists({
            id: process.env.dbName
        })
        return dbResponse.database;
    }

    static createCosmosService() {
        if (dbInstance == null) {
            dbInstance = new Database();
            return dbInstance;
        }
        return dbInstance;
    }
}

module.exports = Database;