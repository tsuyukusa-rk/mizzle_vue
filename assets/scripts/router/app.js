import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 繊維管理のモード
const mode = 'history';
// 階層指定
const routes = [
  {
    path: '/'
  }
];

// インスタンス
const router = new VueRouter({
  mode,
  routes 
});
export default router;
