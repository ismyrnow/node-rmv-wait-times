var http = require('http');
var xml2js = require('xml2js');
var parser = new xml2js.Parser({ explicitArray: false });
var parseXMLString = parser.parseString;

module.exports = function (cb) {
  cb = cb || function(){};

  var req = http.get('http://www.massdot.state.ma.us/feeds/qmaticxml/qmaticXML.aspx', function (res) {
    res.setEncoding('utf8');
    if (res.statusCode !== 200) {
      return cb(new Error('Server responded with status code ' + res.statusCode));
    }

    var body = '';

    res.on('data', function (chunk) {
      body += chunk;
    });

    res.on('end', function () {
      parseXMLString(body, function (err, result) {
        if (err) {
          return cb(err);
        }

        cb(null, result.branches.branch);
      });
    });
  });

  req.on('error', function (err) {
    cb(err);
  });
};
