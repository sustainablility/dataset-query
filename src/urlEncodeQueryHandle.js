/**
 * Function for handling get request
 * @param requests
 * @param response
 */
exports.get = async (requests,response) => {
    // Parsing parameters

    let dataset = requests.params.dataset.split(".");
    if (dataset[1] === undefined) {
        response.send("Suffix needed");
        return null;
    }
    if (requests._parsedUrl.query === null) {
        response.send("Parameters needed");
        return null;
    }

    // For JSON
    if (dataset[1].toLowerCase() === "json") {
        let result = await require('./query/queryResultToJSON').queryToJson(dataset[0],requests._parsedUrl.query);
        response.send(result);
        return null;
    }

    // For CSV
    if (dataset[1].toLowerCase() === "csv") {
        let result = await require('./query/queryResultToCSV').resultToCSV(dataset[0],requests._parsedUrl.query);
        response.send(result);
        return null;
    }
};