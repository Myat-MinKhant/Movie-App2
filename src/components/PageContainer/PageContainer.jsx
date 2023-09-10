import { useEffect, useState } from 'react';
import MovieCard from '../Card/MovieCard';
import PaginationPage from '../PanginationPage/PanginationPage';
import { useParams } from 'react-router-dom';

const PageContainer = ({ category }) => {
    const [data, setData] = useState({})
    // const [moviesByPage, setMoviesByPage] = useState(1)
    const [loading, setLoading] = useState(null);
    const { page } = useParams();
    
    const moviesList = data.results;
    
    const url =
        category === 'trending'
            ? `https://api.themoviedb.org/3/trending/movie/week?page=${page}`
            : `https://api.themoviedb.org/3/movie/${category}?page=${page}`

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmYzNGFkMDlmOGQ4Y2I1MjcxOTYwOTdhZjA2ZTZmYyIsInN1YiI6IjY0YTQyY2QwZTlkYTY5MDBjNzYzZmE5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pz3w5x8vT6YWUX2VoQFhwaJDQT26g5srzBZQ337uAvM'
            }
        };

        fetch(url, options)
            .then(response => response.json())
            .then(response => setData(response))
            .then(() => setLoading(false))
            .catch(err => console.error(err));
    }, [page, url, loading])


    return (
        <>
            <h2 className=' text-4xl font-semibold text-white mb-16 mt-28'>
                {category === 'trending' ? 'Trending Right Now'
                    : category === 'popular' ? 'Popular'
                        : category === 'top_rated' ? 'Top Rated'
                            : category === 'upcoming' ? 'Upcoming'
                                : null
                }
            </h2>

            <div className=' grid grid-cols-4 gap-10'>
                {moviesList && moviesList.map(movie => (
                    <MovieCard
                        key={movie.id}
                        poster_path={movie.poster_path}
                        original_title={movie.original_title || movie.name}
                        release_date={movie.release_date || movie.first_air_date}
                        overview={movie.overview}
                        id={movie.id}
                    />
                ))}
            </div>

            <div className=' text-center mt-20'>
                <PaginationPage
                    results={data}
                    loading={loading}
                    setLoading={setLoading}
                    category={category}
                    // setMoviesByPage={setMoviesByPage}
                />
            </div>
        </>
    )
}

export default PageContainer