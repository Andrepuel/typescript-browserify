var gulp = require('gulp');
var ts = require('gulp-typescript');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task("typescripts", function() {
    return gulp.src(["**.ts", "**.tsx"])
           .pipe(ts({jsx:"react"}))
           .pipe(gulp.dest('./ts'));
});

gulp.task("default", ["typescripts"], function() {
    return browserify()
        .add('ts/index.js')
        .bundle()
        .on('error', function (error) { throw error; })
        .pipe(source('./dist/index.js'))
        .pipe(gulp.dest('./'));
});