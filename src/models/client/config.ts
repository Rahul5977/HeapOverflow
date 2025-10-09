import { Client ,Account, Databases, Avatars, Storage} from "appwrite";
import  env  from "../../app/env"

const client = new Client();

client
  .setEndpoint(env.appwrite.hostUrl)
  .setProject(env.appwrite.projectId);

const account = new Account(client);
const databases = new Databases(client);
const avatars = new Avatars(client);
const storage = new Storage(client);

export { client, account, databases, avatars, storage };
//frontend can talk to appwrite directly
