const gulp = require('gulp');
const concat = require('gulp-concat');
const ngAnnotate = require('gulp-ng-annotate');
const babel = require('gulp-babel');
const flatten = require('gulp-flatten');

const sourceFolder = 'src';
const destinationFolder = 'dist';

gulp.task('build', ['build-js', 'build-index-html', 'build-templates']);

gulp.task('dev', ['build'], function() {
    gulp.watch(`${sourceFolder}/**/*`, ['build']);
});

gulp.task('build-js', function() {
    return gulp.src(`${sourceFolder}/**/*.js`)
        .pipe(ngAnnotate())
        .pipe(babel({
            presets: ['es2015'],
            plugins: ['transform-async-to-generator']
        }))
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