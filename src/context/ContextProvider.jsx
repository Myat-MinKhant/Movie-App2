import { createContext, useEffect, useState } from 'react'
import {
    FetchNowPlayingMovies,
    FetchPopularMovies,
    FetchTopRatedMovies,
    FetchTrendingMovies,
    FetchUpComingMovies,
} from '../apis/Apis';

export const MoviesContext = createContext();

export const MoviesProvider = (props) => {
    const [trending, setTrending] = useState([])
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upComing, setUpComing] = useState([]);
    // const [originals, setOriginals] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);

    useEffect(() => {
        FetchTrendingMovies().then(trending => setTrending(trending))
        FetchPopularMovies().then(popular => setPopular(popular))
        FetchTopRatedMovies().then(topRated => setTopRated(topRated))
        FetchUpComingMovies().then(upComing => setUpComing(upComing))
        FetchNowPlayingMovies().then(nowPlaying => setNowPlaying(nowPlaying))
    }, [])

    return (
        <MoviesContext.Provider value={{ trending, popular, topRated, upComing, nowPlaying }}>
            {props.children}
        </MoviesContext.Provider>
    )
}