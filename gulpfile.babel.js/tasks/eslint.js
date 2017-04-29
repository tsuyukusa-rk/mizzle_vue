import gulp from 'gulp';
import eslint from 'gulp-eslint';
import plumber from 'gulp-plumber';
import notifier from 'node-notifier';
import config from '../config.js';

gulp.task('eslint', ()=> {
  return gulp.src(config.eslint.src)
    .pipe(plumber({
      // �G���[���n���h��
      errorHandler(error) {
        const taskName = 'eslint';
        const title = '[task]' + taskName + ' ' + error.plugin;
        const errorMsg = 'error: ' + error.message;
        // �^�[�~�i���ɃG���[���o��
        console.error(title + '\n' + errorMsg);
        // �G���[��ʒm
        // notifier.notify({
        //   title: title,
        //   message: errorMsg,
        //   time: 3000
        // });
      }
    }))
    .pipe(eslint({ useEslintrc: true })) // .eslintrc ���Q��
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
    .pipe(plumber.stop());
});
