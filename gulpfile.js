

'use strict';

global.$ = {
	gulp: require('gulp'),
	del: require('del'),
	babel: require('gulp-babel'),
	gulpif: require('gulp-if'),
	sassGlob: require('gulp-sass-glob'),
	tabify: require('gulp-tabify'),
	envDev: false,
	gcmq: require('gulp-group-css-media-queries'),
	gp: require('gulp-load-plugins')(),
	browserSync: require('browser-sync').create(),
	postcss: require('gulp-postcss'),
	autoprefixer: require('autoprefixer'),
	flexGapPolyfill: require('flex-gap-polyfill'),
	postcssPresetEnv: require('postcss-preset-env'),
	cssnano: require('cssnano'),
	nested: require('postcss-nested'),
	plumber: require('gulp-plumber'), 
	resizer: require('gulp-images-resizer'),
	responsive: require('@tigersway/gulp-responsive'),
	path: {
		tasks: require('./gulp/config/tasks.js'),
	},
	public: 'public',
	sourse: 'sourse',
}
$.path.tasks.forEach(function (taskPath) {
	require(taskPath)();
});


$.gulp.task('img', $.gulp.series('cleanimg', 'img-responsive', 'img1x'));
$.gulp.task('libs', $.gulp.series('cleanlibs', 'copylibs'));

$.gulp.task('default', $.gulp.series('svg', 'svgCopy',
	// $.gulp.parallel('svg','pug','scripts:lib','scripts','file'),
	// $.gulp.parallel('file'),
	'img',
	$.gulp.parallel( 
		'pug', 
		'libs',
		'scripts',
		'sass',
		'serv', 'watch'
		// 'scripts:common',
		// 'scripts:app',
	),
	// $.gulp.parallel()
));
