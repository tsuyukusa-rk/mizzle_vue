import gulp from 'gulp';
import requireDir from 'require-dir';
import runSequence from 'run-sequence';
runSequence.use(gulp);

/*
* タスクの読み込み
*/
requireDir('./tasks', { recurse: true });

/*
* dev用の一連のファイルコピー
* build:dev
* 画像とかコピー後、HTML,CSS,JSはUTF-8に変換する
*/
gulp.task('build:dev', (callback) => {return runSequence('ejs', 'pug', 'stylus', 'webpack', 'copy_dev', 'imageMin', callback)});

/*
* 作業用タスク
*/
gulp.task('default', () => {return runSequence('clean', 'build:dev', 'eslint', 'server', 'watch')});
/*
* テスト用
*/
gulp.task('test', () => {return runSequence('karma')});

/*
* 納品用タスク
*/
// gulp.task('dist', () => {return runSequence('build:dist')});
