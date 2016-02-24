var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('css', function () {
    gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src'));
});