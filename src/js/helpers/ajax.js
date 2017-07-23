import axios from 'axios';

const oneMinute = 60000;

export const ajax = axios.create({
  headers: { 'Content-Type': 'application/json' },
  timeout: oneMinute,
  
  /**
   * @return {string}
   */
  transformRequest: [
    (data) => {

      // TODO: remove log
      console.log('ajax request data', data);
      return JSON.stringify(data);
    }
  ],
  
  validateStatus: function(status) {
    if (status === 404) {
      return false;
    }
    
    if (status >= 500 && status < 600) {
      return false;
    }
    
    return status >= 200 && status < 300;
  }
});

// Request config
ajax.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
