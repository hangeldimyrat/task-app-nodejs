const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database');
    };

    const db = client.db(databaseName);
    db.collection('users').insertOne({
        name:'Murat',
        lastName:'Çepni',
        age: 24,
        hometown:'Trabzon'
    },(error, result) => {
        if(error){
            return console.log(error);
        };

        console.log(result.ops);
    });

    db.collection('users').insertMany([
        {
            name:'Murat',
            lastName:'Çepni',
            age: 24,
            hometown:'Trabzon'
        },
        {
            name:'Sohrat',
            lastName:'Çepni',
            age: 24,
            hometown:'Trabzon'
        }
    ],(error, result)=>{
        if (error) {
            return console.log(error);
        };
        console.log(result.ops);
    });
});