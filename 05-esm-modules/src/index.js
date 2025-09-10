import { getDataFromApi } from "./utils/api.js";
import { connectToDatabase, disconnectDatabase } from "./utils/database.js";

await connectToDatabase('teste')
await getDataFromApi()
await disconnectDatabase()
