import gulp from "gulp";
import nunjucks from "gulp-nunjucks-render";
import sassImpl from "sass";
import gulpSass from "gulp-sass";
import browserSync from "browsersync";
import fs from "node:fs";
// import rollup from "rollup";

const sass = gulpSass(sassImpl);

const IGNORE_PARTIALS = [
    "!**/_*",
    "!**/_*/**/*",
];

const IGNORE_EPHEMERAL_FILES = [
    "!*~",
    "!*#*",
    "!*.tmp",
    "!*.tmp.*",
];

function initDevTask(cb) {
    fs.rmSync("dist_dev", { recursive: true });
    fs.mkdirSync("dist_dev", { recursive: true });
    cb?.();
}

function initProdTask(cb) {
    fs.rmSync("dist", { recursive: true });
    fs.mkdirSync("dist", { recursive: true });
    cb?.();
}

let server;

function serverTask(cb) {
    if (server) {
        cb?.();
        return;
    }
    server = browserSync.create();
    server.init({
        server: ["dist_dev", "public"],
        // dist takes precedence over public
    });
    cb?.();
}

function reloadTask(cb) {
    if (!server) {
        cb?.();
        return;
    }
    server.reload();
    cb?.();
}

function sassTaskBuilder(isProd) {
    const dist = isProd ? "dist/css" : "dist_dev/css";
    return function sassTask() {
        const sassFiles = ["src/styles/*.sass", ...IGNORE_PARTIALS, ...IGNORE_EPHEMERAL_FILES];
        return gulp.src(sassFiles)
                   .pipe(sass())
                   .pipe(gulp.dest(dist));
    };
}

function htmlTaskBuilder(isProd) {
    const dist = isProd ? "dist" : "dist_dev";
    return function htmlTask() {
        const htmlFiles = ["src/html/**/*.njk", ...IGNORE_PARTIALS, ...IGNORE_EPHEMERAL_FILES];
        return gulp.src(htmlFiles)
                   .pipe(nunjucks())
                   .pipe(gulp.dest(dist));
    };
}

function jsTaskBuilder(isProd) {
    const dist = isProd ? "dist/js" : "dist_dev/js";
    return function jsTask() {
        const jsFiles = ["src/js/*.js", ...IGNORE_PARTIALS, ...IGNORE_EPHEMERAL_FILES];
        return gulp.src(jsFiles)
                   .pipe(___)
                   .pipe(gulp.dest(dist));
    };
}

function staticTaskBuilder(isProd) {
    const dist = isProd ? "dist" : "dist_dev";
    return function staticTask() {
        const staticFiles = ["public/**/*", ...IGNORE_EPHEMERAL_FILES];
        return gulp.src(staticFiles)
                   .pipe(gulp.dest(dist));
    };
}

const devSassTask = sassTaskBuilder(false);
const devHtmlTask = htmlTaskBuilder(false);
const devJsTask = jsTaskBuilder(false);

const prodSassTask = sassTaskBuilder(true);
const prodHtmlTask = htmlTaskBuilder(true);
const prodJsTask = jsTaskBuilder(true);
const prodStaticTask = staticTaskBuilder(true);

function watchTask() {
    const sassFiles   = ["src/styles/**/*", ...IGNORE_EPHEMERAL_FILES];
    const htmlFiles   = ["src/html/**/*", ...IGNORE_EPHEMERAL_FILES];
    const jsFiles     = ["src/js/**/*", ...IGNORE_EPHEMERAL_FILES];
    const staticFiles = ["public/**/*", ...IGNORE_EPHEMERAL_FILES];
    gulp.watch(sassFiles, gulp.series(devSassTask, reloadTask));
    gulp.watch(htmlFiles, gulp.series(devHtmlTask, reloadTask));
    gulp.watch(jsFiles, gulp.series(devJsTask, reloadTask));
    gulp.watch(staticFiles, reloadTask);
}

const buildTask = gulp.series(
    initProdTask,
    prodStaticTask,             // generated files take precedence over static files
    gulp.parallel(
        prodSassTask,
        prodHtmlTask,
        prodJsTask,
    ),
);

const devTask = gulp.series(
    initDevTask,
    gulp.parallel(
        devSassTask,
        devHtmlTask,
        devJsTask,
    ),
    serverTask,
    watchTask,
);

export {
    devTask as dev,
    buildTask as build,
    prodSassTask as sass,
    prodHtmlTask as html,
    prodJsTask as js,
};
