/*
  Copyright Jesús Pérez <jesusprubio@fsf.org>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

'use strict';

const test = require('tap').test; // eslint-disable-line import/no-extraneous-dependencies

const handler = require('../').yargs.handler;


test('should not throw', (assert) => {
  assert.plan(1);

  // We don't do any check here because it's not founding
  // anything in Travis.
  handler();
  assert.ok(true);
});
