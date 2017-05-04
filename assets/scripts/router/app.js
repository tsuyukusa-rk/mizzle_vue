import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import topView from '../containers/pages/top';
import biographyView from '../containers/pages/biography';
import dicographyView from '../containers/pages/discography';
import scheduleView from '../containers/pages/schedule';
import songsView from '../containers/pages/songs';
import contactView from '../containers/pages/contact';

// 繊維管理のモード
// const mode = 'history';
const mode = '';
// 階層指定
const routes = [
  {
    path: '/',
    component: topView
  },
  {
    path: '/biography/',
    component: biographyView
  },
  {
    path: '/discography/',
    component: dicographyView
  },
  {
    path: '/schedule/',
    component: scheduleView
  },
  {
    path: '/songs/',
    component: songsView
  },
  {
    path: '/contact/',
    component: contactView
  }
];

// インスタンス
const router = new VueRouter({
  mode,
  routes
});
export default router;
