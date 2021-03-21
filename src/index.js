import rendering from'./js/rendering';
import './styles.css';
import '@pnotify/core/dist/BrightTheme.css';
import './js/pnotify.js'

const debounce = require('lodash.debounce');
const inputRef = document.querySelector('.js-input');
const buttonRef = document.querySelector('.button');



inputRef.addEventListener('input', debounce((e) => {
  if (e.target.value) return rendering(e.target.value);
}, 500));

buttonRef.addEventListener('click', () =>
  document.getElementsByClassName('container')[0].innerHTML = '');