import axios from 'axios';

axios.defaults.withCredentials = true;
const http = {
  /**
   * 发送GET请求获取数据
   * @param url GET请求的地址
   * @param params GET请求的参数
   * @returns {Promise<any>} 返回一个Promise对象
   */
  get(url, params) {
    return new Promise((resolve) => {
      axios.get(url, {
        params,
      })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          resolve(error.response);
        });
    });
  },
  /**
   * 发送POST请求获取数据
   * @param url POST请求的地址
   * @param params POST请求的参数
   * @returns {Promise<any>} 返回一个Promise对象
   */
  post(url, params) {
    return new Promise((resolve) => {
      axios.post(url, params, {
        withCredentials: true,
      })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          resolve(error.response);
        });
    });
  },
};

export default http;
