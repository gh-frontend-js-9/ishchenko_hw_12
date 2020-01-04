let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('scss', function(){
    return gulp.src('app/assets/styles/scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('app/assets/styles/css'))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('html', function () {
    return gulp.src('app/**/*.html')
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('watch', function(){
    gulp.watch('app/**/*.scss', gulp.parallel('scss'))
    gulp.watch('app/**/*.html',  gulp.parallel('html'))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            index: "index.html",
            directory: true
        }
    });
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'))