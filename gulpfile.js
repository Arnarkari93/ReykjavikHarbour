var gulp   = require('gulp');
var less   = require('gulp-less');
var path   = require('path');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('less', function () {
    return gulp.src('./public/style/*.less')
    .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/style/'));
});

gulp.task('compress', function() {
    return gulp.src('public/js/*/*.js')
      .pipe(concat('client.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('public/dist/'));
});
