var gulp = require('gulp');
var spsave = require('gulp-spsave');
var webpack = require('webpack-stream');
var settings = require('./spsave.config');

gulp.task('save', function () {
    return gulp.src('./dist/**/*')
        .pipe(spsave(
            settings.options,
            settings.credentials
        ));
});

gulp.task('watch', function () {
    gulp.watch(['./dist/**/*'], ['save']);
});


gulp.task('default', ['watch'], function () {
    return gulp.src('./src/main.ts')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/'));
});