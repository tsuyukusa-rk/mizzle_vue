import Vue from 'vue';
import Vuex from 'vuex';
import api from '../utils/api';
import  {
  INCREMENT,
  TALKLIST
} from './mutationTypes'
Vue.use(Vuex);

// 初期の状態データ
const state = {
  [INCREMENT]: 0,
  [TALKLIST]: []
};
// storeの状態を返却する。
// なんらかの処理を加え加工することも可能
const getters = {
  doneTodos(state) {
    return state.todos.filter(todo => todo.done);
  },
  talklist(state) {
    return state[TALKLIST];
  }
};
// ミューテーションと似ているが
// アクションは、状態を変更するのではなく、ミューテーションをコミット。
// アクションは任意の非同期処理を含むことができる。
// store.dispatch('increment');で呼び出す。
const actions = {
  [INCREMENT](context) {
    context.commit(INCREMENT);
  },
  [TALKLIST]({commit}, products) {
    new Promise((resolve, reject)=> {
      api.post({
        param: products,
        then: (res)=> { resolve(res); },
        catch: (err)=> { reject(err); }
      });
    }).then((fetchPostArg)=> {
      api.get({
        then: (res)=> { commit(TALKLIST, res.data); },
        catch: (err)=> {}
      });
    });
  }
};
// state更新のための処理
const mutations = {
  [INCREMENT](state) {
    state.count++;
    console.log(state);
  },
  [TALKLIST](state, data) {
    state[TALKLIST] = data;
    console.log('success:talkList  ' + data);
  }
};
// 拡張機能の追加
const plugins = [];

// vuexのインスタンス
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins,
  strict: process.env.NODE_ENV !== 'production'
});
export default store;
