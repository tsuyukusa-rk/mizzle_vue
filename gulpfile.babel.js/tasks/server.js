import gulp from 'gulp';
import config from '../config.js';
import webserver from 'gulp-webserver';
import browserSync from 'browser-sync';

/*
* ローカルサーバーを立てる
*/
gulp.task('server', ['apiServer'], ()=> {
  return gulp.src(config.dist)
    .pipe(webserver({
      host: 'localhost',
      port: 3001,
      livereload: true,
      open: true,
      // path: '_index/index.html',
      fallback: '/index.html',
      proxies: [
        {
          source: '/api',
          target: 'http://localhost:7777'
        }
      ]
    }));
});

gulp.task('server2', ()=> {
  return browserSync.create().init({
    proxy: "localhost:3001",
    // server: {
    //   baseDir: config.dist,
    //   directory: false,
    //   index: '/index.html'
    // },
    // open: 'external',
    port: 9000
    // tunnel: true
  });
});
