/*
  Copyright Jesús Pérez <jesusprubio@fsf.org>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

'use strict';

const scanner = require('node-wifiscanner');
const logger = require('pown-logger');

let pkgName = require('./package').name;


pkgName = pkgName.slice(5);


exports.yargs = {
  command: pkgName,
  describe: 'Wifi access point mapper',

  builder: {},

  handler: () => {
    logger.title(pkgName);

    scanner.scan((err, data) => {
      if (err) { throw err; }

      logger.result(data);
    });
  },
};
