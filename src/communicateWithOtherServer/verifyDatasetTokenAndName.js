let request = require('request-promise');
let encryption = require('../microservice-communication-encryption/index');
let getUserIDByDataSetTokenUrl = require("../../config").UrlToVerifyDatasetTokenAndName;
let log = require('../log');

async function verify(datasetToken, datasetName) {
    let response = await request(
        {
            uri: getUserIDByDataSetTokenUrl,
            qs: {
                token: encryption.encrypt(datasetToken),
                name: encryption.encrypt(datasetName)
            }
        }
    ).catch(err => {
        log.fatal("MicroServer for verifing database token and name is not working", err)
    });
    if (response === undefined) {
        return null;
    }
    if (response === "0") {
        return false;
    } else {
        return true;
    }

}

module.exports = verify;