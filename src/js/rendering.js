import fetchCountries from '../js/fetchCountries';
import countryList from '../templates/country-list.hbs';
import countryInfo from '../templates/country-info.hbs';
import notify from './pnotify';

const containerRef = document.querySelector('.js-container');

export default function rendering(value) {
  fetchCountries(value).then(checkData);
}

function checkData(data) {
  if (data) {
    if (data.length === 1) {
      containerRef.innerHTML = '';
      containerRef.insertAdjacentHTML('afterbegin', countryInfo(...data));
      return notify.success();
    } if (data.length > 1 && data.length <= 10) {
      containerRef.innerHTML = '';
      containerRef.insertAdjacentHTML('afterbegin', countryList(data));
      return;
    } if (data.length > 10) {
      return notify.info();
    }
  }
  return notify.error();
}