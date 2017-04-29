import gulp from 'gulp';
import sass from 'gulp-sass';
import config from '../config.js';

gulp.task('scss', () => {
  return gulp.src(config.scss)
    .pipe(sass({
      outputStyle: 'expanded'
    })).on('error', sass.logError)
    .pipe(gulp.dest(config.dist));
});
