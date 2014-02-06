# [gulp](https://github.com/wearefractal/gulp)-plato [![Build Status](https://secure.travis-ci.org/sindresorhus/gulp-plato.png?branch=master)](http://travis-ci.org/sindresorhus/gulp-plato)

> Generate complexity analysis reports with [plato](https://github.com/es-analysis/plato)

*Issues with the output should be reported on the plato [issue tracker](https://github.com/es-analysis/plato/issues).*


## Install

Install with [npm](https://npmjs.org/package/gulp-plato)

```
npm install --save-dev gulp-plato
```


## Example

```js
var gulp = require('gulp');
var plato = require('gulp-plato');

gulp.task('default', function () {
	gulp.src('app.js')
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

#### options.complexity

Type: `Object`  

[Options](https://github.com/philbooth/complexity-report#command-line-options) passed to complexity-report.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
