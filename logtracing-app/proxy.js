var http = require('http');
// var httpProxy = require('http-proxy');
//
// var proxy = httpProxy.createProxyServer({target:'http://localhost:8060'}).listen(4200);

// console.log("proxy",proxy);


http.createServer(function (request, response) {
  var new_headers = {
    // 'AM_UID' : 'User2',
    // 'AM_ECPD_ID' : '8001',
    // 'AM_FIRST_NAME' : 'fname',
    // 'AM_LAST_NAME' : 'lname',
    // 'AM_EMAIL_ADDRESS' : 'simon@vzw.com',
    // 'AM_GUID' : '1234',
    // 'AM_USER_TYPE' : 'VZW',
    // 'AM_PORTAL_ROLES' : '[{"portal":"VZW","roles":["PrimaryContact"]}]'
  };
  for (var key in request.headers) {
    if (!request.headers.hasOwnProperty(key)) continue;
    new_headers[key] = request.headers[key];
  }

  var port = request.url.startsWith('/api') ? 8060 : 4200;
  new_headers['host'] = 'localhost:' + port;

  //console.log("\n---");
  console.log("REQUEST", request.method + ": " + request.url);
  //console.log('NEW HEADERS', new_headers);
  //console.log("---");

  var proxy_request = http.request({
    host: 'localhost',
    port: port,
    path: request.url,
    method: request.method,
    headers: new_headers
  });

  proxy_request.addListener('response', function (proxy_response) {
    proxy_response.addListener('data', function (chunk) {
      response.write(chunk, 'binary');
    });
    proxy_response.addListener('end', function () {
      response.end();
    });
    response.writeHead(proxy_response.statusCode, proxy_response.headers);
  });

  request.addListener('data', function (chunk) {
    proxy_request.write(chunk, 'binary');
  });

  request.addListener('end', function () {
    proxy_request.end();
  });

}).listen(9999);
