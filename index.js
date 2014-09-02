'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var plato = require('plato');

module.exports = function (destDir, options) {
	if (!destDir) {
		throw new gutil.PluginError('gulp-plato', '`destDir` required');
	}

	var paths = [];

	options = options || {};
	options.jshint = options.jshint || {};
	options.complexity = options.complexity || {};
	options.complexity.newmi = true;

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-plato', 'Streaming not supported'));
			return;
		}

		paths.push(file.path);
		cb(null, file);
	}, function (cb) {
		if (paths.length === 0) {
			cb();
			return;
		}

		plato.inspect(paths, destDir, options, function () {
			gutil.log('gulp-plato: Report generated in ' + gutil.colors.blue(destDir) + '.');
			cb();
		});
	});
};
