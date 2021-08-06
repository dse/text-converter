var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var gulpSass = require('gulp-sass')(require('node-sass'));
var gulpPostcss = require('gulp-postcss');

var sassPaths = [
    'node_modules/foundation-sites/scss',
    'node_modules/motion-ui/src'
];

function sass() {
    return gulp.src('scss/main.scss')
        .pipe(gulpSass({
            includePaths: sassPaths,
            outputStyle: 'compressed' // if css compressed **file size**
        }).on('error', gulpSass.logError))
        .pipe(gulpPostcss([
            autoprefixer({ browsers: ['last 2 versions', 'ie >= 9'] })
        ]))
        .pipe(gulp.dest('docs/css'));
}

gulp.task('sass', sass);
gulp.task('default', sass);
