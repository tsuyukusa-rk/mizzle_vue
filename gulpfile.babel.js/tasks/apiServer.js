import gulp from 'gulp';
import config from '../config.js';
import jsonServer from 'json-server';
import db from '../db.js';

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

gulp.task('apiServer',()=>{
  return server
    .use(jsonServer.rewriter({
      '/api/': '/',
    }))
    .use(middlewares)
    .use(router)
    .get('/echo', function (req, res) {
      res.jsonp(req.query);
    })
    .listen(7777,function () {
      console.log('JSON Server is running');
    });
});
