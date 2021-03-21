import { alert } from '../../node_modules/@pnotify/core/dist/PNotify.js';
const options = {
  styling: 'brighttheme',
  hide: true,
  delay: 1500,
  icon: true,
  sticker: false,
  closer: false,
  addClass: 'notify',
  minHeight: '100px',
  maxTextHeight: null,
};

 const notify = {
  info() {
    options.type = 'info';
    options.text = 'To many matches found. Please enter a more specific query!';
    return alert(options);
  },
   success() {
    options.type = 'success';
    options.text = 'Country found =))';
    return alert(options);
  },
    error() {
    options.type = 'error';
    options.text = 'There is no country with this name!';
    return alert(options);
  },
}
export default notify;