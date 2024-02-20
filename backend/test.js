import dbClient from './utils/db.js';

console.log(await dbClient.nbUsers())