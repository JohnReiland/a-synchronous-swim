const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

const messageQueue = require('./messageQueue');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

// let messageQueue = null;
// module.exports.initialize = (queue) => {
//   messageQueue = queue;
// };

// Step 3: Refactor the server program so that instead of responding with random commands, the user's directional keypresses and typed commands from the server terminal are sent in response. Keep your tests passing so be sure to update previously written test(s) to match this change.

module.exports.router = (req, res, next = ()=>{}) => {
  //console.log('Serving request type ' + req.method + ' for url ' + req.url);

    if (req.method === 'GET') {
      if (req.url === '/') {
        res.writeHead(200, headers); //The request has succeeded. The information returned with the response is dependent on the method used in the request
        res.end(messageQueue.dequeue());
        // res.end(generateRandom());
      }// else if (req.url === '/?command=random') {
      //   res.writeHead(200, headers); //The request has succeeded. The information returned with the response is dependent on the method used in the request
      //   res.end(generateRandom());
      // }

      // if (req.url === '/background.jpg') {
      //   fs.readFile(module.exports.backgroundImageFile, (err, data) => {
      //     if (err) {
      //       res.writeHead(404, headers);
      //       res.end();
      //     } else {
      //       res.writeHead(200, headers);
      //       res.write(data, 'binary');
      //       res.end();
      //     }
      //   });
      // }



    }
    if (req.method === 'OPTIONS') {
        res.writeHead(200, headers);
        res.end();
    }

    next(); // invoke next() at the end of a request to help with testing!
  };


      // break;

  //};


  var generateRandom = () => {
  var options = ['up', 'down', 'left', 'right'];
  var i = Math.floor(Math.random() * 4);
  return options[i];
};
