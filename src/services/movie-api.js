// key: 9171409e5c797cfebe14b60ebc3f9df1
// base image url: https://image.tmdb.org/t/p/
// image size portion: w300 w500
// URL for now playing: https://api.themoviedb.org/3/movie/now_playing?api_key=9171409e5c797cfebe14b60ebc3f9df1&language=en-US&page=1

const apikey = '9171409e5c797cfebe14b60ebc3f9df1'

export function getCurrentMovies() {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=1`).then(res => res.json());
}