import Vue from "vue";
import axios from "axios";
import qs from "qs";

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    // config.withCredentials = true; // 需要跨域打开此配置
    console.log(config);
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  response => {
    // Do something with response data
    if (response.data.code !== 1 && response.data.code !== 200) {
      Vue.$toast({
        message: response.data.msg,
        position: "top",
        // iconClass: "iconfont icon-warning",
        duration: 2000
      });
      return Promise.reject("error");
    }
    return response.data;
  },
  error => {
    // Do something with response error
    return Promise.reject(error);
  }
);

const baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.VUE_APP_BASEURL
    : process.env.VUE_APP_TARGETURL;
export default {
  baseURL,
  get(url, params) {
    return axios({
      method: "get",
      url: baseURL + url,
      params,
      withCredentials: true,
      timeout: 30000
    });
  },
  post(url, data) {
    return axios({
      method: "post",
      url: baseURL + url,
      data: qs.stringify(data),
      timeout: 30000,
      withCredentials: false,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    });
  },
  form(url, formdata) {
    return axios({
      method: "post",
      url: baseURL + url,
      data: formdata,
      withCredentials: true,
      timeout: 30000
    });
  }
};
