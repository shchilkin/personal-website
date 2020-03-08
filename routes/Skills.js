const express = require('express');
const router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://CrazyKasF:laZymNI4tAsV7OXX@personal-website-egkye.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

client.connect(error => {
    if (error) {
        console.log(error);
    }
    console.log('Successfully connected to mongoDB');

    const collection = client.db("test").collection("users");
    console.log(collection);
    // perform actions on the collection object
    client.close();
});



// @route           GET skills from db
// @description     Skills data
// @access          Public
router.get('/', (request, response)=>{

    response.send('User registration endpoint')
});

module.exports = router;