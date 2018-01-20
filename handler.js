'use strict';

const plukService = require('./src/plukService');

const headers = {
  'Access-Control-Allow-Origin': '*', // Required for CORS support to work
}

module.exports.plukYear = (event, context, callback) => {
  const yearParam = event.path.year;
  const response = {
    statusCode: 200,
    headers: headers,
    body: JSON.stringify({
      message: plukService.getForYear(year)
    })
  };
  callback(null, response);
}

module.exports.plukStatus = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: headers,
    body: JSON.stringify({
      plukStatus: plukService.getStatus(new Date())
    })
  };
  callback(null, response);
}

