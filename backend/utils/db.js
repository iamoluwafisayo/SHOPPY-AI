import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import sha1 from "sha1";

dotenv.config();
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT || "27017";
const DB_URL = `mongodb://${DB_HOST}:${DB_PORT}/`;
const DB = process.env.DB_NAME || "shoppy";

class DBClient {
    constructor() {
        MongoClient.connect(
            DB_URL,
            { useUnifiedTopology: true },
            (err, client) => {
                if (err) {
                    console.error(err);
                    this.db = false;
                } else {
                    console.log("Connected to MongoDB");
                    this.db = client.db(DB);
                    this.usersCollection = this.db.collection("users");
                    this.messagesCollection = this.db.collection("messages");
                    this.otpCollection = this.db.collection("otps");
                    this.contactCollection = this.db.collection("contacts");
                }
            }
        );
    }
    isAlive() {
        return Boolean(this.db);
    }
    async newUser(data) {
        try {
            const currentDate = new Date();
            data.password = sha1(data.password);
            data.createdAt = currentDate;
            data.updatedAt = currentDate;
            await this.usersCollection.createIndex(
                { email: 1 },
                { unique: true }
            );
            await this.usersCollection.insertOne(data);
        } catch (error) {
            throw error;
        }
    }

    async getUser(data) {
        const result = await this.usersCollection.findOne(data);
        if (result) {
            return result;
        }
        return false;
    }
    async findUsers() {
        const result = await this.usersCollection
            .find({}, { sort: { updatedAt: -1 } })
            .toArray();
        return result;
    }
    async update(data, newData) {
        try {
            newData.updatedAt = new Date();
            await this.usersCollection.updateOne(data, { $set: newData });
        } catch (error) {
            throw error;
        }
    }
    async newMessage(data) {
        try {
            const currentDate = new Date();
            data.createdAt = currentDate;
            data.updatedAt = currentDate;
            await this.messagesCollection.insertOne(data);
        } catch (error) {
            throw error;
        }
    }
    async findMessages(query) {
        return this.messagesCollection
            .find(query, { sort: { updatedAt: -1 } })
            .toArray();
    }

    async getChat(chatId) {
        // return only the message and role fields of each message object that has the chatId

        const result = await this.messagesCollection
            .find({ chatId })
            .project({ message: 1, role: 1, _id: 0 })
            .toArray();

        return result;
    }

    async newOtp(data) {
        try {
            await this.otpCollection.createIndex(
                { expire: 1 },
                { expireAfterSeconds: 0 }
            );
            await this.otpCollection.insertOne(data);
        } catch (err) {
            throw err;
        }
    }
    async getOtp(otp) {
        try {
            const result = await this.otpCollection.findOne(otp);
            return result;
        } catch (err) {
            throw err;
        }
    }
    async newContact(data) {
        try {
            const currentDate = new Date();
            data.createdAt = currentDate;
            data.updatedAt = currentDate;
            await this.contactCollection.insertOne(data);
        } catch (error) {
            throw error;
        }
    }
    async getContacts() {
        const result = await this.contactCollection
            .find({}, { sort: { updatedAt: -1 } })
            .toArray();
        return result;
    }
}

const dbClient = new DBClient();

//module.exports = dbClient;
export default dbClient;
