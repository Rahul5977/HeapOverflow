import env from "../../app/env";
import { Client, Users, Databases, Avatars, Storage, TablesDB} from "node-appwrite";
let client = new Client();

client
    .setEndpoint(env.appwrite.hostUrl) // Your API Endpoint
    .setProject(env.appwrite.projectId) // Your project ID
    .setKey(env.appwriteApiKey) // Your secret API key
;

const databases = new Databases(client);
const avatars = new Avatars(client);
const storage = new Storage(client);
const users = new Users(client);
const tables = new TablesDB(client);

//backend talks to appwrite using sdk

export { client, users, databases, avatars, storage, tables };