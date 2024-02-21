
import  { MongoClient }  from 'mongodb';
const url = "mongodb://172.17.0.2:27017/mydb";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});