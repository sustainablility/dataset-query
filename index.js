let ex = require('express');
let app = ex();
let urlEncodeQueryHandle = require('./src/urlEncodeQueryHandle');

app.get('/',(requests,response) => {

    response.send("Hello");
});
app.get('/token/:dataset',urlEncodeQueryHandle.get);

app.listen(12222);