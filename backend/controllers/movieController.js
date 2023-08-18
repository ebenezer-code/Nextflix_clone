import axios from 'axios'
import { api_key } from '../config/env.js'

export const getTopMovies = async (req, res) => {
    const api_url = 'https://api.themoviedb.org/3/trending/movie/day';

    try {
        const response = await axios.get(api_url, {
            params: {
                api_key: api_key,
                language: 'en-US'
            }
        });
        const movieData = response.data.results; 

        return res.status(200).json({ message: 'Successful', data: movieData });
    } catch (error) {
        console.error('Error:', error);
        return res.status(400).json({ message: 'Something went wrong' });
    }
};

export const getPopularTvSeries = async (req, res) => {
    const api_url = 'https://api.themoviedb.org/3/tv/popular' 

    try {
        const response = await axios.get(api_url, {
            params: {
                api_key: api_key,
                language: 'en-US'
            }
        });
        const movieData = response.data.results; 

        return res.status(200).json({ message: 'Successful', data: movieData });
    } catch (error) {
        console.error('Error:', error);
        return res.status(400).json({ message: 'Something went wrong' });
    }
}

export const getTopRatedTvSeries = async (req, res) => {
    const api_url = 'https://api.themoviedb.org/3/tv/top_rated' 

    try {
        const response = await axios.get(api_url, {
            params: {
                api_key: api_key,
                language: 'en-US'
            }
        });
        const movieData = response.data.results; 

        return res.status(200).json({ message: 'Successful', data: movieData });
    } catch (error) {
        console.error('Error:', error);
        return res.status(400).json({ message: 'Something went wrong' });
    }
}

export const getTvSeriesAiringToday = async (req, res) => {
    const api_url = 'https://api.themoviedb.org/3/tv/airing_today'

    try {
        const response = await axios.get(api_url, {
            params: {
                api_key: api_key,
                language: 'en-US'
            }
        });
        const movieData = response.data.results; 

        return res.status(200).json({ message: 'Successful', data: movieData });
    } catch (error) {
        console.error('Error:', error);
        return res.status(400).json({ message: 'Something went wrong' });
    }
}

export const searchMovies = async (req, res) => {
    const api_url = 'https://api.themoviedb.org/3/search/movie'

    const { search_string } = req.params
    console.log(search_string);

    try {
        console.log('working');
        const response = await axios.get(api_url, {
            params: {
                api_key: api_key,
                language: 'en-US',
                query: search_string,
            }
        });
        const movieData = response.data.results; 

        return res.status(200).json({ message: 'Successful', data: movieData });
    } catch (error) {
        console.error('Error:', error);
        return res.status(400).json({ message: 'Something went wrong' });
    }
}

export const searchTvSeries = async (req, res) => {
    const api_url = 'https://api.themoviedb.org/3/search/tv';

    const { search_string } = req.params

    try {
        console.log('working');
        const response = await axios.get(api_url, {
            params: {
                api_key: api_key,
                language: 'en-US',
                query: search_string,
            }
        });
        const movieData = response.data.results; 

        return res.status(200).json({ message: 'Successful', data: movieData });
    } catch (error) {
        console.error('Error:', error);
        return res.status(400).json({ message: 'Something went wrong' });
    }
}

export const searchMulti = async (req, res) => {
    const api_url = 'https://api.themoviedb.org/3/search/multi';

    const { search_string } = req.params

    try {
        console.log('working');
        const response = await axios.get(api_url, {
            params: {
                api_key: api_key,
                language: 'en-US',
                query: search_string,
                page: 32,
            }
        });
        const movieData = response.data.results; 

        return res.status(200).json({ message: 'Successful', data: movieData });
    } catch (error) {
        console.error('Error:', error);
        return res.status(400).json({ message: 'Something went wrong' });
    }
}