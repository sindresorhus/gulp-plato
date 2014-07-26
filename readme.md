# [gulp](http://gulpjs.com)-plato [![Build Status](https://travis-ci.org/sindresorhus/gulp-plato.svg?branch=master)](https://travis-ci.org/sindresorhus/gulp-plato)

> Generate complexity analysis reports with [plato](https://github.com/es-analysis/plato)

*Issues with the output should be reported on the plato [issue tracker](https://github.com/es-analysis/plato/issues).*


## Install

```bash
$ npm install --save-dev gulp-plato
```


## Usage

```js
var gulp = require('gulp');
var plato = require('gulp-plato');

gulp.task('default', function () {
	return gulp.src('app.js')
		.pipe(plato('report', {
			jshint: {
				options: {
					strict: true
				}
			},
			complexity: {
				trycatch: true
			}
		}));
});
```


## API

### plato(destDir, options)

#### destDir

*Required*
Type: `String`

Report destination.

#### options.jshint

Type: `Object`

[Options](http://www.jshint.com/docs/options/) passed to JSHint.

Alternatively, you can set options.jshint to be the path to your existing .jshintrc file.

Type: `string`

```js
var gulp = require('gulp');
var plato = require('gulp-plato');

gulp.task('default', function () {
	return gulp.src('app.js')
		.pipe(plato('report', {
			jshint: '.jshintrc',
			complexity: {
				trycatch: true
			}
		}));
});
```

#### options.complexity

Type: `Object`

[Options](https://github.com/philbooth/complexity-report#command-line-options) passed to complexity-report.


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
