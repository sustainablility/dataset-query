let query = require('../model/query');
let createConn = require('../model/createConnection');
let query2mongo = require('../query-to-mongo');

/**
 * Query dataset by query parameters and output JSON
 * Return null if error
 * @param collection
 * @param queryParams
 * @returns {Promise<*>}
 */
async function resultToJSON(collection,queryParams) {
    let conn = await createConn.connectToDatasetDatabase();
    let queryObj = query2mongo(queryParams);
    let jsonResult = await query.query(conn.db,collection,queryObj.criteria,queryObj.options);
    conn.done();
    return jsonResult;
}

exports.queryToJson = resultToJSON;