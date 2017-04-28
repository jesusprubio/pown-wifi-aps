/*
  Copyright Jesús Pérez <jesusprubio@fsf.org>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

'use strict';

const scanner = require('node-wifiscanner');
const wifiName = require('wifi-name');
const logger = require('pown-logger');

let pkgName = require('./package').name;


const defaults = false;
pkgName = pkgName.slice(5);


exports.yargs = {
  command: pkgName,
  describe: 'Wifi access point mapper',

  builder: {
    connected: {
      type: 'boolean',
      alias: 'c',
      describe: `Include also the connected AP (if any) [${defaults}]`,
    },
  },

  handler: (argv = {}) => {
    logger.title(pkgName);

    scanner.scan((err, aps) => {
      if (err) { throw err; }

      logger.result('Access points', aps);

      if (argv.connected) { wifiName().then(ap => logger.result('Connected AP', ap)); }
    });
  },
};
