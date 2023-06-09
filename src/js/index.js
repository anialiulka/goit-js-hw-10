import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const options = document.querySelector('.breed-select');
const catInfoCard = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');

export const displayLoading = () => {
  loader.classList.remove('hidden');
  catInfoCard.classList.add('hidden');
};

const hideLoading = () => {
  loader.classList.add('hidden');
  options.classList.remove('hidden');
  catInfoCard.classList.remove('hidden');
};

fetchBreeds().then(data => {
  hideLoading();
  renderCatOptions(data);
});

function renderCatOptions(cats) {
  const markup = cats
    .map(cat => `<option value=${cat.id}>${cat.name}</option>`)
    .join('');
  options.insertAdjacentHTML('beforeend', markup);
  new SlimSelect({
    select: '.breed-select',
  });
}

options.addEventListener('change', onClick);

function onClick(e) {
  e.preventDefault();
  catInfoCard.innerHTML = ' ';
  const breedId = options.value;
  console.log(breedId);
  fetchCatByBreed(breedId).then(data => {
    hideLoading();
    showTheSelectedBreed(data);
  });
}

function showTheSelectedBreed(selectedBreed) {
  console.log(selectedBreed);
  const markup = selectedBreed.map(({ breeds, url }) =>
    breeds
      .map(
        ({ temperament, description, name }) =>
          `<div class="cat-card"><img src="${url}" alt="${name}"><div><h1>${name}</h1><p>${description}</p><p><span class="temperament">Temperament:</span> ${temperament}</p></div></div>`
      )
      .join('')
  );

  catInfoCard.insertAdjacentHTML('beforeend', markup);
}
