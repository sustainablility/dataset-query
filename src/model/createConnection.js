let mongoClient = require('mongodb').MongoClient;
let databaseConfig = require('../../config').database;
let log = require('../log');

/**
 * How to use:
 * function would return an promise
 * there are two variables:
 *      db - database object
 *      done - Database connection closing method
 */

async function connectToMainDatabase() {
    let dbUrl = "mongodb://" + databaseConfig.host + ":" + databaseConfig.port + '/';
    let dbs = await mongoClient.connect(dbUrl,{ useNewUrlParser: true }).catch(error => {
        log.fatal("Cannot Connect to database",error);
    });
    if (dbs === undefined) {
        return null;
    } else {
        let done = () => {
            dbs.close();
        };
        let db = dbs.db(databaseConfig.main);
        return {
            db: db,
            done: done
        };
    }
}

async function connectToDatasetDatabase() {
    let dbUrl = "mongodb://" + databaseConfig.host + ":" + databaseConfig.port + '/';
    let dbs = await mongoClient.connect(dbUrl,{ useNewUrlParser: true }).catch(error => {
        log.fatal("Cannot Connect to database",error);
    });
    if (dbs === undefined) {
        return null;
    } else {
        let done = () => {
            dbs.close();
        };
        let db = dbs.db(databaseConfig.dataset);
        return {
            db: db,
            done: done
        };
    }
}

exports.connectToDatasetDatabase = connectToDatasetDatabase;
exports.connectToMainDatabase = connectToMainDatabase;

