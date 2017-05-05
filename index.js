const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

// CORS.
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
  if (req.method === 'OPTIONS') {
    console.log('OPTIONS');
    return next();
    return res.send(200);
  } else {
    return next();
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`)
})
