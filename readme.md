# node-env-webpack-plugin [![Build Status](https://travis-ci.org/sindresorhus/node-env-webpack-plugin.svg?branch=master)](https://travis-ci.org/sindresorhus/node-env-webpack-plugin)

> Simplified `NODE_ENV` handling with [webpack](https://webpack.js.org)


## Install

```
$ npm install node-env-webpack-plugin
```


## Usage

```diff
  'use strict';
  const path = require('path');
+ const NodeEnvPlugin = require('node-env-webpack-plugin');

- const NODE_ENV = process.env.NODE_ENV || 'development';
- const isProduction = NODE_ENV === 'production';

  module.exports = {
  	entry: './source',
  	output: {
  		path: path.join(__dirname, 'distribution'),
  		filename: 'bundle.js'
  	},
- 	devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
+ 	devtool: NodeEnvPlugin.devtool,
  	module: {
  		rules: [
  			{
  				test: /\.js$/,
  				exclude: /node_modules/,
  				loader: 'babel-loader'
  			}
  		]
  	},
  	plugins: [
- 		new webpack.EnvironmentPlugin({
- 			NODE_ENV: 'development'
- 		}),
+ 		new NodeEnvPlugin()
  	]
  };
```


## API

Sets `process.env.NODE_ENV` in the Node.js process to `development` at import-time if it's not defined.

### NodeEnvPlugin()

Sets `process.env.NODE_ENV` in the bundle to the same as in the Node.js process.

### NodeEnvPlugin.isProduction

For convenience and to prevent typos.

`process.env.NODE_ENV === 'production'`

### NodeEnvPlugin.isDevelopment

`process.env.NODE_ENV === 'development'`

### NodeEnvPlugin.isTest

`process.env.NODE_ENV === 'test'`

### NodeEnvPlugin.devtool

Pass this to the webpack `devtool` option. It will give you good but slow source maps in production (`source-map`) and fast source maps in development (`cheap-module-source-map`).


## Related

- [add-asset-webpack-plugin](https://github.com/sindresorhus/add-asset-webpack-plugin) - Dynamically add an asset to the webpack graph
- [add-module-exports-webpack-plugin](https://github.com/sindresorhus/add-module-exports-webpack-plugin) - Add `module.exports` for Babel and TypeScript compiled code


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
