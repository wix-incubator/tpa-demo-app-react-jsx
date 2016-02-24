var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('babel', function () {
    gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(gulp.dest('dist'));
});
