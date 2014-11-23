# gulp-plato [![Build Status](https://travis-ci.org/sindresorhus/gulp-plato.svg?branch=master)](https://travis-ci.org/sindresorhus/gulp-plato)

**Deprecated. Just use [`plato`](https://github.com/es-analysis/plato#from-scripts) directly.**

> Generate complexity analysis reports with [plato](https://github.com/es-analysis/plato)

*Issues with the output should be reported on the plato [issue tracker](https://github.com/es-analysis/plato/issues).*


## Install

```sh
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
Type: `string`

Report destination.

#### options.jshint

Type: `object`  

[Options](http://www.jshint.com/docs/options/) passed to JSHint.

#### options.complexity

Type: `object`  

[Options](https://github.com/philbooth/complexity-report#command-line-options) passed to complexity-report.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
