import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import topView from '../containers/pages/top';
import biographyView from '../containers/pages/biography';

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
    component: biographyView
  },
  {
    path: '/schedule/',
    component: biographyView
  },
  {
    path: '/songs/',
    component: biographyView
  },
  {
    path: '/contact/',
    component: biographyView
  }
];

// インスタンス
const router = new VueRouter({
  mode,
  routes
});
export default router;
