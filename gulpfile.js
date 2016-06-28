const gulp = require('gulp');
const concat = require('gulp-concat');
const ngAnnotate = require('gulp-ng-annotate');
const babel = require('gulp-babel');

const sourceFolder = 'src';
const destinationFolder = 'dist';

gulp.task('build', ['build-js', 'build-html']);

gulp.task('dev', ['build'], function() {
    gulp.watch(`${sourceFolder}/**/*`, ['build']);
});

gulp.task('build-js', function() {
    return gulp.src(`${sourceFolder}/**/*.js`)
        .pipe(ngAnnotate())
        .pipe(babel())
        .pipe(concat('app.js'))
        .pipe(gulp.dest(destinationFolder));
});

gulp.task('build-html', function() {
    return gulp.src(`${sourceFolder}/**/*.html`)
        .pipe(gulp.dest(destinationFolder));
});