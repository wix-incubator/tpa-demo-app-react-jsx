var gulp = require('gulp');
var rt = require('gulp-react-templates');

gulp.task('rt', function() {
    gulp.src('src/**/*.rt')
        .pipe(rt({modules: 'amd'}))
        .pipe(gulp.dest('src'));
});