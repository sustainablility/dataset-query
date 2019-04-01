let assert = require('chai').assert;
let createConnection = require('../src/model/createConnection');
let query = require('../src/model/query');
let testingDatabase = "test";
let testingQuery = {
    'policyID': '785275'
};

describe("Model Test",function () {
    it('Testing Database Connection and Query', function (done) {
        (async function f() {
            let conn = await createConnection.connectToDatasetDatabase();
            assert.notEqual(conn,null,"Database Connection Error");
            let result = await query.query(conn.db,testingDatabase,testingQuery);
            assert.notEqual(result.length,0,"Database Query Error");
            conn.done();
            done();
        })();
    });
});