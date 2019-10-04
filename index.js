let ex = require('express');
let app = ex();
let urlEncodeQueryHandle = require('./src/urlEncodeQueryHandle');

app.get('/:datasetToken/:dataset',urlEncodeQueryHandle.get);
app.listen(12222);