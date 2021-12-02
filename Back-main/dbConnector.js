//import connection Library
let MongoClient = require('mongodb').MongoClient;
//import db connection
let {connectionString, dbName} = require('./dbConfig');
//functions 
async function testConnection(){
    try{
        let connection = await MongoClient.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        let db = connection.db(dbName);
        let numCollections = (await db.collections()).length;
    
        if (numCollections > 0){
            return true;
        }
    }catch (ex) {
        return false;
    }
}

async function findData(collectionName, filter){
    try{
        let connection = await MongoClient.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        let db = connection.db(dbName);
        let collection = db.collection(collectionName);
        let cursor = collection.find(filter);
        let result = [];
        let currentDocument = await cursor.next();

        while (currentDocument) {
            result.push(currentDocument);
            currentDocument = await cursor.next();
        }
    
        if (numCollections > 0){
            return result;
        }
    }catch (ex) {
        return null;
    }
}

//Exports 
module.exports.testConnection = testConnection;
module.exports.findData = findData;