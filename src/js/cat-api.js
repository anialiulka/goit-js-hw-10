export const url = 'https://api.thecatapi.com/v1/breeds';
export const options = {
  headers: {
    'x-api-key':
      'live_lBTSTNBFsjyVKVnPf0SFzlzF4x2W6CALNRoEBwvBgVayIIxa3hl3HNjkXyxQUDDK',
  },
};

export function fetchBreeds() {
  return fetch(url, options).then(response => {
    return response.json();
  });
}
export function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
    options
  ).then(response => {
    console.log(response);
    return response.json();
  });
}
