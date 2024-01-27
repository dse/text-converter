var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var gulpSass = require('gulp-sass')(require('node-sass'));
var gulpPostcss = require('gulp-postcss');
var gulpRename = require('gulp-rename');

var sassPaths = [
    'node_modules/foundation-sites/scss',
    'node_modules/motion-ui/src'
];

function sassMinified() {
    return gulp.src('scss/main.scss')
        .pipe(gulpSass({
            includePaths: sassPaths,
            outputStyle: 'compressed' // if css compressed **file size**
        }).on('error', gulpSass.logError))
        .pipe(gulpPostcss([
            autoprefixer({ browsers: ['last 2 versions', 'ie >= 9'] })
        ]))
        .pipe(gulpRename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('docs/css'));
}

function sassUnminified() {
    return gulp.src('scss/main.scss')
        .pipe(gulpSass({
            includePaths: sassPaths,
            outputStyle: 'compact' // if css compressed **file size**
        }).on('error', gulpSass.logError))
        .pipe(gulpPostcss([
            autoprefixer({ browsers: ['last 2 versions', 'ie >= 9'] })
        ]))
        .pipe(gulp.dest('docs/css'));
}

var sass = gulp.parallel(sassUnminified, sassMinified);
// var sass = sassMinified;

gulp.task('sass', sass);
gulp.task('default', sass);
