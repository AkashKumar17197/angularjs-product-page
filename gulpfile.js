const gulp = require('gulp');
const clean = require('gulp-clean');
const useref = require('gulp-useref');
const gulpIf = require('gulp-if');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');

// Clean the dist folder
gulp.task('clean:product-page', function() {
    return gulp.src('product-page', {read: false, allowEmpty: true})
        .pipe(clean());
});

// Minify and copy files to dist folder
gulp.task('useref', function(){
    return gulp.src('index.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('product-page'));
});

// Default task to run all the tasks
gulp.task('default', gulp.series('clean:product-page', 'useref'));
