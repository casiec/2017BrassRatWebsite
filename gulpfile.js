var gulp = require('gulp'),
	nodemon = require('gulp-nodemon');

var paths = {
	css: "public/css/**/*.css",
	js: "public/js/**/*.js",
	html: "public/**/*.html"
}

gulp.task('reload', function() {
	require("child_process").exec("osascript " +
		"-e 'tell application \"Google Chrome\" " +
		"to tell the active tab of its first window' " +
		"-e 'reload' " +
		"-e 'end tell'");
});

gulp.task('watch', function() {
	gulp.watch(paths.html, ['reload']);
	gulp.watch(paths.css,  ['reload']);
	gulp.watch(paths.js,   ['reload']);
});

gulp.task('demon', function () {
	nodemon({
		script: 'server.js',
		ext: 'js',
		verbose: false,
	});
});

gulp.task('default', ['demon', 'watch'])