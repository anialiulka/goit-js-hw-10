import { displayLoading, error } from './index';
import Notiflix from 'notiflix';
const url = 'https://api.thecatapi.com/v1/breeds';
const options = {
  headers: {
    'x-api-key':
      'live_lBTSTNBFsjyVKVnPf0SFzlzF4x2W6CALNRoEBwvBgVayIIxa3hl3HNjkXyxQUDDK',
  },
};

const displayError = () => {
  Notiflix.Notify.failure(error.textContent);
};

export function fetchBreeds() {
  displayLoading();
  return fetch(url, options)
    .then(response => {
      return response.json();
    })
    .catch(displayError);
}
export function fetchCatByBreed(breedId) {
  displayLoading();
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
    options
  )
    .then(response => {
      return response.json();
    })
    .catch(displayError);
}
