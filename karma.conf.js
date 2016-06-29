module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],

        files: [
            'dist/dependencies/angular.min.js',
            'dist/dependencies/**/*.js',

            'dist/**/*.js',

            'src/**/*.spec.js'
        ]
    });
};