var gulp = require('gulp');

require('./tasks/css');
require('./tasks/babel');
require('./tasks/serve');

gulp.task('default', ['serve', 'css', 'babel'], function () {
    gulp.watch('src/**/*.scss', ['css']);
    gulp.watch('src/**/*.js', ['babel']);
});
