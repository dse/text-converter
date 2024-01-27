'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
function sassTask() {
    return gulp.src(['src/styles/*.scss', '!**/_*', '!**/_*/**/*'],
                    { base: 'src/styles' })
               .pipe(sass())
               .pipe(gulp.dest('dist/css'));
}
module.exports = {
    sass: sassTask,
};
