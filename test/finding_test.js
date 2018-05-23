const assert = require('assert');
const marioChar = require("../models/mariochar");

describe('Finding records', () => {

    var char;

    beforeEach((done) => {
        char = new marioChar({
            name: "Dupa",
            weight: 2
        });

        char.save().then(() => {
            //assert(char.isNew===false);
            done();
        });
    });
    //Create tests
    it('Finds one record from database', (done) => {
        marioChar.findOne({
                name: 'Dupa'
            })
            .then((res) => {                
                assert(res.name === 'Dupa');
                done();
            })
    });

    it('Finds one by ID record from database', (done) => {
        marioChar.findOne({
                _id: char._id
            })
            .then((res) => {               
                assert(res._id.toString() === char._id.toString());
                done();
            })
    });

});