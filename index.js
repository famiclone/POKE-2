#!/usr/bin/env node

const express = require('express');
const path = require('path');
const app = express();
const port = 2000;


app.use('/static', express.static(path.join(__dirname, 'build/static')));

app.get('/', (request, response) => {
  return response.sendFile(__dirname + '/build/index.html')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
