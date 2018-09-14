var express = require('express');
var httpProxy = require('http-proxy');

var apiForwardingUrl = 'https://api.yelp.com/v3';

var server = express();
server.set('port', 5000);
server.use(express.static(__dirname + '/yelp-gql'));

var proxyOptions = {
  changeOrigin: true
};

httpProxy.prototype.onError = function(err) {
  console.log('Error --------------------');
  console.log(err);
};

var apiProxy = httpProxy.createProxyServer(proxyOptions);

console.log('Forwarding API requests to ' + apiForwardingUrl);

server.all('/graphql', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', [
    'POST',
    'GET',
    'OPTIONS',
    'PUT',
    'DELETE'
  ]);

  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, Referer, User-Agent'
  );

  apiProxy.web(req, res, { target: apiForwardingUrl });
});

server.listen(server.get('port'), function() {
  console.log('Express server listening on port ' + server.get('port'));
});
