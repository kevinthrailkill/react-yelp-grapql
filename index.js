const express = require('express');
const https = require('https');
const bodyParser = require('body-parser-graphql');

const server = express();
server.set('port', 5000);
server.use(express.static(__dirname + '/yelp-gql'));

const apiForwardingUrl = 'https://api.yelp.com/v3/graphql';

console.log('Forwarding API requests to ' + apiForwardingUrl);

const YELP_ACCESS_TOKEN =
  'zZcR-ZhvOyXrlHQ1nCuPxQMdFXTjolxR4JWxua-Rq4geBcFklVuTA2fOuj04Jghi7gbIka7PUOmIFignaXFSBLkzzrbA--qxXmGYbYvt8Nn1052tlNPTFHDC-bb3WXYx';

server.all('/graphql', (req, res) => {
  const options = {
    // host to forward to
    host: 'api.yelp.com',
    // port to forward to
    port: 443,
    // path to forward to
    path: '/v3/graphql',
    // request method
    method: 'POST',
    // headers to send
    headers: {
      Authorization: `Bearer ${YELP_ACCESS_TOKEN}`,
      'Content-Type': 'application/graphql',
      'Access-Control-Allow-Origin': '*'
    }
  };

  const yelpReq = https
    .request(options, yelpReq => {
      // set encoding
      yelpReq.setEncoding('utf8');

      // wait for data
      yelpReq.on('data', d => {
        res.write(d);
      });

      yelpReq.on('close', () => {
        res.statusCode = yelpReq.statusCode;
        res.end();
      });

      yelpReq.on('end', () => {
        res.statusCode = yelpReq.statusCode;
        res.end();
      });
    })
    .on('error', e => {
      console.log('Yelp Connection Error');
      console.log(e.message);
      res.statusCode = 500;
      res.end();
    });

  req
    .on('data', d => {
      yelpReq.write(d);
    })
    .on('end', () => {
      yelpReq.end();
    });
});

server.listen(server.get('port'), () => {
  console.log('Express server listening on port ' + server.get('port'));
});
