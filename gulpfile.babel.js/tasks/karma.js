import gulp from 'gulp';
import karma from 'karma';
import path from 'path';
const server = karma.Server;

gulp.task('karma', (done) => {
  new server({
    configFile: path.resolve('') + '/karma.conf.js'
  }, done).start();
});
