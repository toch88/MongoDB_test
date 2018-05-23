
const assert = require('assert');
const marioChar = require("../models/mariochar");

describe('Saving records', () => {
    //Create tests
    it('Saving records to database', (done) => {        

        var char = new marioChar({
            name: "Dupa",
            weight: 2
        });

        char.save().then(() => {
            assert(char.isNew===false);
            done();
        });

    });

});