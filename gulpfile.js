var gulp = require('gulp'),
    pug = require('gulp-pug'),
    del = require('del'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect'),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify"),
    browserify = require('gulp-browserify')

var clean = () => {
    return del(['public/assets', 'public/*.html'])
}

var server = () => {
    connect.server({
        root: 'public',
        livereload: true,
        port: 9000
    })
}

var views = () => {
    return gulp.src('src/pug/*.pug')
        .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
        .pipe(pug())
        .pipe(gulp.dest('public'))
}

var mainStyle = () => {
    return gulp.src([
            'node_modules/@fortawesome/fontawesome-free/scss/*.scss'
        ])
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(concat('plugin.css'))
        .pipe(gulp.dest('public/assets/css'))
}

var style = () => {
    return gulp.src([
            'src/sass/*.sass'
        ])
        .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('public/assets/css'))
}

var javascript = () => {
    return gulp.src([
            'src/js/*.js'
        ])
        .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('public/assets/js'))
}

var images = () => {
    return gulp.src('src/images/**/*.*')
        .pipe(gulp.dest('public/assets/images'))
}

var fonts = () => {
    return gulp.src([
            'node_modules/@fortawesome/fontawesome-free/webfonts/*.*',
            'src/fonts/**/*.*'
        ])
        .pipe(gulp.dest('public/assets/webfonts'))
}

const compile = gulp.parallel(mainStyle, style, javascript, images, fonts, views)
var build = gulp.series(clean, compile)

gulp.task('default', build);

var getTime = () => {
    let d = new Date()
    return d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
}

var watchReload = () => {
    watch('src/pug/**/*.pug', () => {
        console.log('[\x1b[90m%s\x1b[0m] Html update', getTime())
        views().pipe(connect.reload())
    })
    watch('src/sass/**/*.sass', () => {
        console.log('[\x1b[90m%s\x1b[0m] Css update', getTime())
        style().pipe(connect.reload())
    })
    watch('src/js/**/*.js', () => {
        console.log('[\x1b[90m%s\x1b[0m] Js update', getTime())
        javascript().pipe(connect.reload())
    })
    watch('src/vue/**/*.vue', () => {
        console.log('[\x1b[90m%s\x1b[0m] Vue update', getTime())
        javascript().pipe(connect.reload())
    })
    watch('src/images/**/*.*', () => {
        console.log('[\x1b[90m%s\x1b[0m] Images update', getTime())
        images().pipe(connect.reload())
    })
}

var dev = gulp.parallel(server, watchReload)

gulp.task('dev', dev)