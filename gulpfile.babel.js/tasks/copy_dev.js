import gulp from 'gulp';
import config from '../config.js';
import changed from 'gulp-changed';

/*
* 画像周りをコピー
*/
gulp.task('copy_dev', () => {
  return gulp.src(
      config.copy.dev, { base: config.src }
    )
    .pipe(changed(config.dist))
    .pipe(gulp.dest(config.dist));
});
