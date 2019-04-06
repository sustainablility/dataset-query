let ex = require('express');
let app = ex();
let urlEncodeQueryHandle = require('./src/urlEncodeQueryHandle');

app.get('/token/:dataset',urlEncodeQueryHandle.get);
app.listen(12222);