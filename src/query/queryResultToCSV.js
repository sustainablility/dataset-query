let { Parser } = require('json2csv');
let query = require('../model/query');
let query2mongo = require('../query-to-mongo');
let createConn = require('../model/createConnection');
let json2csv = new Parser();
let log = require('../log');

/**
 * Query dataset by query parameters and output CSV
 * Return null if error
 * @param collection
 * @param queryParams
 * @returns {Promise<String|null>}
 */
async function resultToCSV(collection,queryParams) {
    let conn = await createConn.connectToDatasetDatabase();
    let queryObj = query2mongo(queryParams);
    let jsonResult = await query.query(conn.db,collection,queryObj.criteria,queryObj.options).catch(err => {
        log.error("Query from database Failed",err)
    });
    conn.done();
    if (jsonResult === null) {
        return null;
    } else {
        let csvResult;
        try {
            csvResult = json2csv.parse(jsonResult);
            return csvResult;
        }catch (e) {
            return null;
        }

    }
}

exports.resultToCSV = resultToCSV;