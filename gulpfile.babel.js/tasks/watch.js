import gulp from 'gulp';
import config from '../config.js';
import runSequence from 'run-sequence';
import watch from 'gulp-watch';

/*
* ファイル更新を監視
*/
gulp.task('watch', () => {
  watch(config.watch.bin, () => {return runSequence('copy_dev')});
  watch(config.watch.ejs, () => {return runSequence('ejs')});
  watch(config.watch.scss, () => {return runSequence('scss', 'webpack', 'eslint')});
  watch(config.watch.stylus, () => {return runSequence('stylus', 'webpack', 'eslint')});
  watch(config.watch.js, () => {return runSequence('webpack', 'eslint')});
  watch(config.watch.vue, () => {return runSequence('webpack', 'eslint')});
  watch(config.watch.do, () => {return runSequence('copy_dev')});
  watch(config.watch.json, () => {return runSequence('copy_dev')});
  watch(config.watch.imageMin, () => {return runSequence('imageMin')});
  watch(config.watch.pug, () => {return runSequence('pug')});
});
