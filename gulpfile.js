const gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    prefixer = require('gulp-autoprefixer'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    gulpIf = require('gulp-if'),
    plumber = require('gulp-plumber');

const path = {
    build: {
        css: 'build/css/',
    },
    src: {
        html: '*.html',
        css: 'src/css/main.scss',
    },
    watch: {
        html: '*.html',
        css: 'src/css/**/*.scss',
    }
};

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

gulp.task('webserver', function () {
    let config = {
        server: {
            baseDir: "./"
        },
        host: 'localhost',
        port: 9000
    };
    browserSync(config);
});

gulp.task('html', function () {
    gulp.src(path.src.html)
        .pipe(reload({stream: true}));
});

gulp.task('style', function () {
    gulp.src(path.src.css)
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(sass({
            includePaths: ['src/css/'],
            outputStyle: 'compressed',
            errLogToConsole: true
        }))
        .pipe(prefixer({ browsers: ['> 1%', 'IE 11']}))
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('watch', function() {
    watch([path.watch.html], function(event, cb) {
        gulp.start('html');
    });
    watch([path.watch.css], function(event, cb) {
        gulp.start('style');
    });
});

gulp.task('default', ['style', 'webserver', 'watch']);