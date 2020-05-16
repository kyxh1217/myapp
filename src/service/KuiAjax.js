import axios from 'axios';
import qs from 'qs';
import { Toast, Notify } from 'vant';
import AppConstants from '../constant/AppConstants';

let router;
const axiosInstance = axios.create({
  baseURL: AppConstants.BASE_URL, // api 的 base_url
  // timeout: 50000, // request timeout  设置请求超时时间
  responseType: 'json',
  withCredentials: false, // 是否允许带cookie这些
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('Authorization');
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = token; // 请求头加上token
    }
    return config;
  },
);
axiosInstance.interceptors.response.use(
  (response) => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      const { data } = response;
      if (!data.code) {
        Notify({
          type: 'danger',
          message: '返回数据格式不正确，缺少code字段',
        });
      } else if (data.code === 100) {
        return Promise.resolve(response);
      } else {
        Notify({
          type: 'danger',
          message: data.msg,
        });
        // console.error(`router=${vm.$router}`);
        if (data.code === 202) {
          router.push('/');
        }
      }
    }
    return Promise.reject(response);
  },
  (error) => {
    Notify({
      type: 'danger',
      message: '系统繁忙，请稍候再试',
    });
    return Promise.reject(error);
  },
);
const post = (url, params = {}) => {
  const loading = Toast.loading({
    message: '加载中...',
    forbidClick: true,
    loadingType: 'spinner',
    duration: 0,
  });
  return new Promise((resolve, reject) => {
    axiosInstance.post(url,
      qs.stringify(params))
      .then((resp) => {
        const { data } = resp;
        if (data.code === 100) {
          resolve(data.res);
        }
      }, reject)
      .finally(() => {
        loading.close();
      });
  });
};
const get = (url, params = {}) => {
  const loading = Toast.loading({
    message: '加载中...',
    forbidClick: true,
    loadingType: 'spinner',
    duration: 0,
  });
  return new Promise((resolve) => {
    axiosInstance.get(url, {
      params,
    })
      .then((resp) => {
        const { data } = resp;
        if (data.code === 100) {
          resolve(data.res);
        }
      })
      .finally(() => {
        loading.clear();
      });
  });
};
const KuiAjax = (r) => {
  router = r;
  return {
    install(Vue) {
      Object.defineProperty(Vue.prototype, '$request',
        {
          value: {
            post,
            get,
          },
          writable: false,
          configurable: false,
          enumerable: true,
        });
    },
  };
};
export default KuiAjax;
