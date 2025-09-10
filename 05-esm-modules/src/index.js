import { connectToDatabase, disconnectDatabase } from "./utils/database.js";

await connectToDatabase('teste')
await disconnectDatabase()
