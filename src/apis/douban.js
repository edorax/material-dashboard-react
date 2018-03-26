import fetchJsonp from 'fetch-jsonp';

const API_ENDPOINT = 'https://api.douban.com/v2/movie/top250';

export const fetchMovies = () => 
  fetchJsonp(API_ENDPOINT)
  .then(res => res.json())
  // .then(json => json.subjects.map(
  //   ({images}) => images.small
  // ))
  .then(json => json.subjects);
