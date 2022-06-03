const key = '726b4f47d0e24249fc668a5451187b69';

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestLatest: ` https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`,

  requestTvshows: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
};

export default requests;
