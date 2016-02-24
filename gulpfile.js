var gulp = require('gulp');

require('./tasks/css');
require('./tasks/reactTemplates');
require('./tasks/serve');

gulp.task('default', ['serve', 'css', 'rt'], function () {
    gulp.watch('src/**/*.scss', ['css']);
    gulp.watch('src/**/*.rt', ['rt']);
});
