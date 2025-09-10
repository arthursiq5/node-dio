import * as database from "./utils/database.js";

await database.connectToDatabase('teste')
await database.disconnectDatabase()
