let queryResultToJSON = require("../src/query/queryResultToJSON");
let assert = require('chai').assert;

// Test collection and query are predefined
let testCollection = "test";
let testQuery = "policyID=119736&$fields=tiv_2012";

describe("Query Result To JSON",function () {
    it('should be good', function (done) {
        (async function f() {
            let result = await queryResultToJSON.queryToJson(testCollection,testQuery);
            assert.equal(result[0].tiv_2012,792148.9,"Result is not correct");
            done();
        })();
    });
});