import gulp from 'gulp';
import config from '../config.js';
import gulpWebpack from 'gulp-webpack';
import webpackConfig from '../webpack.config.js';

/*
* webpack
*/
gulp.task('webpack', ()=> {
  return gulp.src(config.webpack.src)
    .pipe(gulpWebpack(webpackConfig))
    .pipe(gulp.dest(config.dist));
});
