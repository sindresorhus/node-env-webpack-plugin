import fs from 'fs';
import path from 'path';
import test from 'ava';
import webpack from 'webpack';
import tempy from 'tempy';
import pify from 'pify';

delete process.env.NODE_ENV;

test(async t => {
	const config = require('./fixture/webpack.config');
	const cwd = tempy.directory();
	config.output.path = cwd;
	await pify(webpack)(config);
	t.regex(fs.readFileSync(path.join(cwd, 'unicorn.js'), 'utf8'), /development/);
});
