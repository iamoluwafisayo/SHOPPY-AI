import { MongoClient } from 'mongodb';
import dotenv from 'dotenv'
import sha1 from 'sha1';

dotenv.config()
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || '27017';
const DB_URL = `mongodb://${DB_HOST}:${DB_PORT}/my_db`;
const DB = process.env.DB_NAME || 'files_manager';

class DBClient {
    constructor() {
        MongoClient.connect(DB_URL, { useUnifiedTopology: true }, (err, client) => {
            if (err) {
                console.error(err);
                this.db = false;
            } else {
                this.db = client.db(DB);
                this.usersCollection = this.db.collection('users');
                this.filesCollection = this.db.collection('files');
                this.usersCollection.countDocuments()
            }
        });
    }
    isAlive() {
        return Boolean(this.db)
    }
    async newUser(data){
        await this.usersCollection.insertOne(data)
        return;
    }
    async getUser(data) {
        return this.usersCollection.findOne(data);
    }
    async update(data, newData) {
        result = await this.usersCollection.updateOne(data, {$set: newData})
        return result
    }
}

const dbClient = new DBClient();

//module.exports = dbClient;
export default dbClient;
