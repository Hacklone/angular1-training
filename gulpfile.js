const gulp = require('gulp');
const concat = require('gulp-concat');
const ngAnnotate = require('gulp-ng-annotate');
const flatten = require('gulp-flatten');

const sourceFolder = 'src';
const destinationFolder = 'dist';

gulp.task('build', [
    'build-js',
    'build-index-html',
    'build-templates',
    'build-views'
]);

gulp.task('dev', ['build'], function() {
    gulp.watch(`${sourceFolder}/**/*`, ['build']);
});

gulp.task('build-js', function() {
    return gulp.src(`${sourceFolder}/**/*.js`)
        .pipe(ngAnnotate())
        .pipe(concat('app.js'))
        .pipe(gulp.dest(destinationFolder));
});

gulp.task('build-index-html', function() {
    return gulp.src(`${sourceFolder}/index.html`)
        .pipe(gulp.dest(destinationFolder));
});

gulp.task('build-templates', function() {
    return gulp.src(`${sourceFolder}/**/*.template.html`)
        .pipe(flatten())
        .pipe(gulp.dest(`${destinationFolder}/templates`));
});

gulp.task('build-views', function() {
    return gulp.src(`${sourceFolder}/**/*.view.html`)
        .pipe(flatten())
        .pipe(gulp.dest(`${destinationFolder}/views`));
});