let query = require('./model/query');
let createConn = require('./model/createConnection');
let query2mongo = require('./query-to-mongo/index');

(async function () {
    let conn = await createConn.connectToDatasetDatabase();
    let queryObj = query2mongo("policyID='119736'");
    let result = await query.query(conn.db,'test',queryObj.criteria,queryObj.options);
    console.log(result);
    conn.done();
})();