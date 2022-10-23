const fs = require('fs');
const path = require('path');

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
 
gulp.task('default', async () => {
    fs.readdirSync(path.join(__dirname, 'dist')).forEach(item => {
        // remove all files and folders in dist
        fs.unlinkSync(path.join(__dirname, 'dist', item));
    })

    gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('v-show-slide.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))

    gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('v-show-slide.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
});

// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
// }
  
// exports.default = defaultTask