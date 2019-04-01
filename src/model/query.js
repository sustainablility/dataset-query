let log = require('../log');

/**
 * Function for query things
 * @param db
 * @param collection
 * @param queryObj
 * @param queryOptions
 * @returns {Promise<*>}
 */
async function queryDocument(db, collection, queryObj, queryOptions) {
    let data = await db.collection(collection).find(queryObj,queryOptions).toArray().catch(error => {
        log.fatal("Cannot query data from collection: " + collection, error);
    });
    if (data === undefined) {
        return null;
    } else {
        return data;
    }
}

exports.query = queryDocument;