import axios from 'axios';
// axiosの共通設定
axios.create({
  responseType: 'json',
  timeout: 99999,
});

const api = {
  get: (setting)=> {
    return axios.get('/api/talkList')
      .then((res)=> {
        setting.then(res);
      })
      .catch((err)=> {
        setting.catch(err);
      });
  },
  post: (setting)=> {
    return axios.post('/api/talkList', param)
      .then(function (res) {
        setting.then(res);
      })
      .catch(function (err) {
        setting.catch(err);
      });
  }
};

// Promise.all([
//   api.get('/my/api'),
//   api.get('/my/api2')
// ]).then(([api1Result, api2Result])=> {})

export default api;
