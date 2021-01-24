const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database');
    };

    const db = client.db(databaseName);

    db.collection('tasks').insertMany([
        {
            description:'Start MongoDB',
            completed: true
        },
        {
            description:'Sent multiple collections',
            completed: true
        }
    ],(error, result) => {
        if(error){
            return console.log(error);
        };
        console.log(result.ops);
    });
});