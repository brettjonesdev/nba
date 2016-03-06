"use strict";

var request = require("request");

module.exports = function jsonStrategy (url, query, callback) {
  request({
    url: url,
    qs: query,
    json: true,
    headers: {
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36",
      "referer": "http://stats.nba.com/scores/"
    }
  }, function (err, resp, body) {
    callback(err, body);
  });
};
