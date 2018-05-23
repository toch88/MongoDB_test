const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//Connect to Database before test
before((done) => {
    //Connect to mongodb
    mongoose.connect('mongodb://localhost/testaroo');
    mongoose.connection.once('open', () => {
        console.log('Connection has been made, udalo sie');
        done();
    }).on('error', (error) => {
        console.log('Connection error: ', error);
    });
});

// Drop the characteres collection before each test
beforeEach((done)=>{
    mongoose.connection.collections.mariochars.drop(()=>{
        done();
    })
})

