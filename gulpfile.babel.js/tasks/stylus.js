import gulp from 'gulp';
import stylus from 'gulp-stylus';
import autoPrefixer from 'autoprefixer-stylus';
import config from '../config.js';

gulp.task('stylus', () => {
  return gulp.src(config.stylus)
    .pipe(stylus({
      // use: [
      //   autoPrefixer({
      //     // ☆IEは9以上、Androidは4以上、iOS Safariは8以上
      //     // その他は最新2バージョンで必要なベンダープレフィックスを付与する設定
      //     browsers: ['last 2 versions', 'ie >= 9', 'Android >= 4','ios_saf >= 8'],
      //     cascade: false
      //   })
      // ]
    }))
    .pipe(gulp.dest(config.dist));
});
