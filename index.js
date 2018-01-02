'use strict';
const webpack = require('webpack');
const hasFlag = require('has-flag');

if (!process.env.NODE_ENV) {
	process.env.NODE_ENV = hasFlag('p') ? 'production' : 'development';
}

module.exports = class NodeEnvPlugin {
	apply(compiler) {
		compiler.apply(new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}));
	}
};

module.exports.isProduction = process.env.NODE_ENV === 'production';
module.exports.isDevelopment = process.env.NODE_ENV === 'development';
module.exports.isTest = process.env.NODE_ENV === 'test';
module.exports.devtool = module.exports.isProduction ? 'source-map' : 'cheap-module-source-map';
