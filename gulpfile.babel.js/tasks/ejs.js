import gulp from 'gulp';
import config from '../config.js';
import gulpUtil from 'gulp-util';
import ejs from 'gulp-ejs';
import rename from 'gulp-rename';

gulp.task('ejs', () => {
  return gulp.src(config.ejs)
    .pipe(ejs({}).on('error', gulpUtil.log))
    .pipe(rename({extname: '.html'}))
    .pipe(gulp.dest(config.dist))
});
