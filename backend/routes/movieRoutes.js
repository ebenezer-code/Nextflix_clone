import express from 'express';
import { getTopMovies,  getPopularTvSeries, getTopRatedTvSeries, getTvSeriesAiringToday, searchMovies, searchTvSeries, searchMulti } from '../controllers/movieController.js';

const movieRouter = express.Router();

// Get top movies
movieRouter.get('/top_movies', getTopMovies);

// Get popular tv series 
movieRouter.get('/popular_tv', getPopularTvSeries);

// Get top rated tv series 
movieRouter.get('/top_rated_tv', getTopRatedTvSeries)

// Get tv series airing today 
movieRouter.get('/tv_airing_today', getTvSeriesAiringToday)

// Search Routes 

// Search for movies 
movieRouter.post('/search_movies/:search_string', searchMovies)

// Search for tv series 
movieRouter.post('/search_tv/:search_string', searchTvSeries)

// Search for movies, tv series, person, keyword 
movieRouter.post('/search_multi/:search_string', searchTvSeries)




export default movieRouter;