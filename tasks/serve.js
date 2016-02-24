var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('serve', function () {
    nodemon({
        script: 'serve.js',
        ext: 'js css html'
    });
});