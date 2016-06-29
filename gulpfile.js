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
    'build-views',
    'build-dependencies'
]);

gulp.task('dev', ['build'], function() {
    gulp.watch(`${sourceFolder}/**/*`, ['build']);
});

gulp.task('build-js', function() {
    return gulp.src([
        `${sourceFolder}/**/*.js`,
        `!${sourceFolder}/**/*.spec.js`
    ])
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

gulp.task('build-dependencies', function() {
    return gulp.src([
        'bower_components/angular/angular.min.js',
        'bower_components/angular-messages/angular-messages.min.js',
        'bower_components/angular-route/angular-route.min.js',
        'bower_components/angular-mocks/angular-mocks.js'
    ])
        .pipe(flatten())
        .pipe(gulp.dest(`${destinationFolder}/dependencies`));
});