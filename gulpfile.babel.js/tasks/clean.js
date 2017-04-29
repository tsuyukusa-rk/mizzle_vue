import gulp from 'gulp';
import config from '../config.js';
import del from 'del';

/*
* 対象ディレクトリ内のファイルを除去
*/
gulp.task('clean', (callback) => del([config.dist], callback));
