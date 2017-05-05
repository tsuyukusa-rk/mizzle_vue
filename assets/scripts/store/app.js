import Vue from 'vue';
import Vuex from 'vuex';
import api from '../utils/api';
import  {
  SCHEDULE,
  AMAOTO,
  AMAOTO_TIME,
  MOVIE_STAR,
  MOVIE_STAR_TIME
} from './mutationTypes'
Vue.use(Vuex);

import schedule from '../data/schedule'

// 初期の状態データ
const state = {
  [SCHEDULE]: schedule,
  [AMAOTO]: null,
  [AMAOTO_TIME]: '0：00',
  [MOVIE_STAR]: null,
  [MOVIE_STAR_TIME]: '0：00'
};
// storeの状態を返却する。
// なんらかの処理を加え加工することも可能
const getters = {
  schedule(state) {
    return state[SCHEDULE];
  },
  amaoto(state) {
    return state[AMAOTO];
  },
  amaotoTime(state) {
    return state[AMAOTO_TIME];
  },
  movieStar(state) {
    return state[MOVIE_STAR];
  },
  movieStarTime(state) {
    return state[MOVIE_STAR_TIME];
  }
};
// ミューテーションと似ているが
// アクションは、状態を変更するのではなく、ミューテーションをコミット。
// アクションは任意の非同期処理を含むことができる。
// store.dispatch('increment');で呼び出す。
const actions = {
  [AMAOTO_TIME]({ commit, state }, products) {
    const formatTime = (time) => {
      time = Math.floor(time);
      const sec = (String(Math.floor(time % 60)).length === 1) ? '0' + Math.floor(time % 60) : Math.floor(time % 60);
      time = Math.floor(time / 60) + '：' + sec;
      return time;
    };
    commit(AMAOTO_TIME, formatTime(products));
  },
  [MOVIE_STAR_TIME]({ commit, state }, products) {
    const formatTime = (time) => {
      time = Math.floor(time);
      const sec = (String(Math.floor(time % 60)).length === 1) ? '0' + Math.floor(time % 60) : Math.floor(time % 60);
      time = Math.floor(time / 60) + '：' + sec;
      return time;
    };
    commit(MOVIE_STAR_TIME, formatTime(products));
  },
  [AMAOTO]({ commit, state }, products) {
    const song = X.clone();
    const promise = new Promise((resolve, reject) => {
      X.ajax({
        url: '/audio/mp3/amaoto.mp3',
        timeout: 60000,
        success: (event, arrayBuffer) => {
          // 第1引数は, XMLHttpRequestProgressEventインスタンス
          // 第2引数は, ArrayBuffer
          // ArrayBuffer -> AudioBuffer -> AudioBufferSourceNode
          resolve({
            obj: song,
            buf: arrayBuffer
          });
        },
        error: (event, textStatus) => {
          // 第1引数は, XMLHttpRequestProgressEvent
          // 第2引数は, 文字列 'error', 'timeout' のどちらか
        },
        progress: (event) => {
          // 第1引数は, XMLHttpRequestProgressEventインスタンス
        }
      });
    });
    promise.then((data) => { commit(AMAOTO, data); });
  },
  [MOVIE_STAR]({ commit, state }, products) {
    const song = X.clone();
    const promise = new Promise((resolve, reject) => {
      X.ajax({
        url: '/audio/mp3/movie_star.mp3',
        timeout: 60000,
        success: (event, arrayBuffer) => {
          // 第1引数は, XMLHttpRequestProgressEventインスタンス
          // 第2引数は, ArrayBuffer
          // ArrayBuffer -> AudioBuffer -> AudioBufferSourceNode
          resolve({
            obj: song,
            buf: arrayBuffer
          });
        },
        error: (event, textStatus) => {
          // 第1引数は, XMLHttpRequestProgressEvent
          // 第2引数は, 文字列 'error', 'timeout' のどちらか
        },
        progress: (event) => {
          // 第1引数は, XMLHttpRequestProgressEventインスタンス
        }
      });
    });
    promise.then((data) => { commit(MOVIE_STAR, data); });
  }
};
// state更新のための処理
const mutations = {
  [AMAOTO_TIME](state, payload) {
    state[AMAOTO_TIME] = payload;
  },
  [AMAOTO](state, payload) {
    state[AMAOTO] = payload;
  },
  [MOVIE_STAR_TIME](state, payload) {
    state[MOVIE_STAR_TIME] = payload;
  },
  [MOVIE_STAR](state, payload) {
    state[MOVIE_STAR] = payload;
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
