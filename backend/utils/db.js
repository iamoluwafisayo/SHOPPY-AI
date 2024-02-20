import { MongoClient } from 'mongodb';
import sha1 from 'sha1';

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || '27017';
const DB_URL = `mongodb://${DB_HOST}:${DB_PORT}`;
const DB = process.env.DB_NAME || 'files_manager';

class DBClient {
    constructor() {
        MongoClient.connect(URL, { useUnifiedTopology: true }, (err, client) => {
            if (err) {
                console.error(err);
                this.db = false;
            } else {
                this.db = client.db(DB);
                this.usersCollection = this.db.collection('users');
                this.filesCollection = this.db.collection('files');
            }
        });
    }
  async nbUsers() {
    
    return this.db ? this.usersCollection.countDocuments() : 0;
  }
}

const dbClient = new DBClient();

//module.exports = dbClient;
export default dbClient;
