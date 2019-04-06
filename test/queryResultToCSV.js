let queryResultToCSV = require("../src/query/queryResultToCSV");
let assert = require('chai').assert;

// Test collection and query are predefined
let testCollection = "test";
let testQuery = "policyID=119736&$fields=tiv_2012";
let expectedResult = "\"_id\",\"tiv_2012\"\n" +
    "\"5ca814fe8d05f870e7c5ccd0\",792148.9";

describe("Query Result To CSV",function () {
    it('should be good', function (done) {
        (async function f() {
            let result = await queryResultToCSV.resultToCSV(testCollection,testQuery).catch(function (err) {
                assert.fail(err)
            });
            assert.equal(result,expectedResult,"Result does not match the expected value");
            done();
        })();
    });
});