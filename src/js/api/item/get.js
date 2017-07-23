import { ajax } from '../../helpers/index';

/**
 * @param item {string}
 * @returns {Promise}
 */
export const getItem = (item) => {
  return ajax
    .get(`/path/to/items/${item}`)
    .then(response => response.data)
    .catch(error => console.log('error: ', error));
};
