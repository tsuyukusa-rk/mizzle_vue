const gulp = require('gulp');
const glob = require("glob");
const fs = require('fs-extra');

/*
* _index
*/
gulp.task('_index', () => {
  const option = null;
  const dir = './assets/_html/';
  let filelistArray = [];
  fs.readdir(dir,(err,list) => {
    for(let i = 0; i < list.length; i++) {
      if (list[i] !== '.DS_Store') {
        filelistArray.push({
          name: list[i],
          list: glob.sync(dir+list[i]+'/**/*.pug',option)
        });
      }
    }
    fs.mkdirsSync('./dist/_index/data/');
    fs.writeFile('./dist/_index/data/mocklist.json', JSON.stringify(filelistArray, null , "\t").replace(/.\/assets/g,'').replace(/.pug/g,'.html'));
  });
});
