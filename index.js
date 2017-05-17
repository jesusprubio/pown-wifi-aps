/*
  Copyright Jesús Pérez <jesusprubio@fsf.org>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

'use strict';

const defaults = false;


exports.yargs = {
  command: 'wifi-aps',
  describe: 'Wifi access point mapper',

  builder: {
    connected: {
      type: 'boolean',
      alias: 'c',
      describe: `Include also the connected AP (if any) [${defaults}]`,
    },
  },

  handler: (argv = {}) => {
    /* eslint-disable global-require */
    const scanner = require('node-wifiscanner');
    const wifiName = require('wifi-name');
    const logger = require('pown-logger');
    /* eslint-enable global-require */


    logger.title(this.yargs.command);

    scanner.scan((err, aps) => {
      if (err) { throw err; }

      logger.result('Access points', aps);

      if (argv.connected) { wifiName().then(ap => logger.result('Connected AP', ap)); }
    });
  },
};
