import fetch from './../base';

export const MOVIESTYPE = {
  inTheaters: 'in_theaters',
  comingSoon: 'coming_soon',
  avers: 'avers',
};

export function fetchMoviesQuery({ name }) {
  return fetch('https://miaobbs.herokuapp.com/api/avers/search', { name });
}
export function fetchMovieSubject(id) {
  return fetch(`https://miaobbs.herokuapp.com/api/avers/${id}`);
}
export function fetchMovies() {
  return fetch('https://miaobbs.herokuapp.com/api/avers');
}
