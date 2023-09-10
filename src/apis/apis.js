import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = 'bb54f7b2b7df1fb3997388d5d115ba52'
const endpoints = {
    // originals: "/discover/tv",
    trending: "/trending/movie/week?page=1",
    now_playing: "/movie/now_playing?page=1",
    popular: "/movie/popular?page=1",
    top_rated: "/movie/top_rated?page=1",
    upcoming: "/movie/upcoming?page=1",
};

export async function FetchTrendingMovies() {
    let data = [];

    await axios.get(`${URL}${endpoints.trending}`, {
        params: {
            api_key: API_KEY,
        },
    }).then(res => data = res.data.results)

    return data
}


export async function FetchNowPlayingMovies() {
    let data = [];

    await axios.get(`${URL}${endpoints.now_playing}`, {
        params: {
            api_key: API_KEY,
        },
    }).then(res => data = res.data.results)

    return data
}

export async function FetchPopularMovies() {
    let data = [];

    await axios.get(`${URL}${endpoints.popular}`, {
        params: {
            api_key: API_KEY,
        },
    }).then(res => data = res.data.results)

    return data
}

export async function FetchTopRatedMovies() {
    let data = [];

    await axios.get(`${URL}${endpoints.top_rated}`, {
        params: {
            api_key: API_KEY,
        },
    }).then(res => data = res.data.results)

    return data
}

export async function FetchUpComingMovies() {
    let data = [];

    await axios.get(`${URL}${endpoints.upcoming}`, {
        params: {
            api_key: API_KEY,
        },
    }).then(res => data = res.data.results)

    return data
}