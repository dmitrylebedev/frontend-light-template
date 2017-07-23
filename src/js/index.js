import { ready, changeBtnText } from './helpers';

ready(function () {
  const btn = document.querySelector('#button');
  btn.addEventListener('click', changeBtnText);
});
