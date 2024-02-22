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
    async newUser(data) {
        try {
            data.password = sha1(data.password);
            await this.usersCollection.createIndex({ email: 1 }, { unique: true });
            await this.usersCollection.insertOne(data);
        } catch (error) {
            throw error; 
        }
    }

    async getUser(data) {
        data.password = sha1(data.password);
        const result = await this.usersCollection.findOne(data);
        if (result) {
            const { email, password } = result;
            return { email, password };
        }
        return false;
    }
    async update(data, newData) {
        result = await this.usersCollection.updateOne(data, {$set: newData})
        
    }
}

const dbClient = new DBClient();

//module.exports = dbClient;
export default dbClient;
