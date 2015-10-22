//ex 13

var http = require('http'),
    url = require('url');

function getAndConvertDate(parsedData) {
    return new Date(parsedData['query']['iso']);
}

function sendResponse(res, responseData) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(responseData);
}

var server = http.createServer(function (req, res) {

    var parsedData = url.parse(req.url, true);

    if ((parsedData['pathname'] == '/api/parsetime') && (req.method == 'GET')) {
        var date = getAndConvertDate(parsedData);

        var responseData = JSON.stringify({
           "hour" : date.getHours(),
           "minute" : date.getMinutes(),
           "second" : date.getSeconds()
        });
        
        sendResponse(res, responseData);
    }

    if ((parsedData['pathname'] == '/api/unixtime') && (req.method == 'GET')) {
        var date = getAndConvertDate(parsedData);

        var responseData = JSON.stringify({
           "unixtime" : date.getTime()
        });
        
        sendResponse(res, responseData);
    }

    res.end();  
});

server.listen(process.argv[2]);
