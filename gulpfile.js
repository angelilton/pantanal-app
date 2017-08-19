var gulp = require('gulp')
var pug = require('gulp-pug')
var stylus = require('gulp-stylus')
var connect = require('gulp-connect')

gulp.task('pug', function(){
    gulp.src('./src/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./out'))
        .pipe(connect.reload())
})

gulp.task('stylus', function () {
    gulp.src('./src/assets/styles/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./out/assets/styles/'))
        .pipe(connect.reload())
})

gulp.task('watch', function(){
    gulp.watch(['./src/*.pug'],['pug'])
    gulp.watch(['./src/assets/styles/*.styl'],['stylus'])
})

gulp.task('connect', function() {
    connect.server({
        root: './out',
        livereload: true
    })
})

gulp.task('dev',['watch','connect'])

gulp.task('build',['pug','stylus'])

