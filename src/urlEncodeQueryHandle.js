/**
 * Function for handling get request
 * @param requests
 * @param response
 */
exports.get = (requests,response) => {
    // Parsing parameters

    let dataset = requests.params.dataset.split(".");
    if (dataset[1] === undefined) {
        response.send("Suffix needed");
    }else if (requests._parsedUrl.query === null) {
        response.send("Parameters needed");

        // For JSOn
    }else if (dataset[1].toLowerCase() === "json") {
        (async function f() {
            let result = await require('./query/queryResultToJSON').queryToJson(dataset[0],requests._parsedUrl.query);
            response.send(result);
        })()

        // For CSV
    }else if (dataset[1].toLowerCase() === "csv") {
        (async function f() {
            let result = await require('./query/queryResultToCSV').resultToCSV(dataset[0],requests._parsedUrl.query);
            response.send(result);
        })();
    }
};