'use strict';
var gutil = require('gulp-util');
var through = require('through');
var plato = require('plato');
var _ = require('lodash');

module.exports = function (destDir, options) {
	var paths = [];

	if (!destDir) {
		throw new Error('gulp-plato: `destDir` required.');
	}

	options = options || {};
	options.jshint = options.jshint || {};
	options.complexity = options.complexity || {};

	return through(function (file) {
		paths.push(file.path);
		this.emit('data', file);
	}, function () {
		if (paths.length === 0) {
			return this.emit('end');
		}

		plato.inspect(paths, destDir, options, function () {
			gutil.log('gulp-plato: Report generated in ' + gutil.colors.blue(destDir) + '.');
			this.emit('end');
		}.bind(this));
	});
};
