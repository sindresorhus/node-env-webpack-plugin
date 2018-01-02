'use strict';
const assert = require('assert');
const NodeEnvPlugin = require('..');

assert.strictEqual(process.env.NODE_ENV, 'development');

module.exports = {
	output: {
		filename: 'unicorn.js'
	},
	entry: __dirname,
	plugins: [
		new NodeEnvPlugin()
	]
};
