'use strict';
var fs = require('fs');
var assert = require('assert');
var gutil = require('gulp-util');
var rimraf = require('rimraf');
var plato = require('./');

before(function () {
	rimraf.sync('report');
});

it('should generate report', function (cb) {
	this.timeout(20000);

	var stream = plato('report');

	stream.on('data', function () {});

	stream.on('end', function () {
		assert(fs.existsSync('report'));
		rimraf.sync('report');
		cb();
	});

	stream.write(new gutil.File({
		path: 'index.js',
		contents: new Buffer('')
	}));

	stream.end();
});
