import Wrapper from "../components/Wrapper/Wrapper"
import { SlStar } from 'react-icons/sl';
import { HiOutlineDownload } from 'react-icons/hi';
import MovieCard from "../components/Card/MovieCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import no_img from '../assets/NoImage.jpg'

const Detail = () => {
  const [movie, setMovie] = useState({});
  const [trailer, setTrailer] = useState({});
  const [similar, setSimilar] = useState([])
  const { id } = useParams();

  // console.log(id);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmYzNGFkMDlmOGQ4Y2I1MjcxOTYwOTdhZjA2ZTZmYyIsInN1YiI6IjY0YTQyY2QwZTlkYTY5MDBjNzYzZmE5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pz3w5x8vT6YWUX2VoQFhwaJDQT26g5srzBZQ337uAvM'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
      .then(response => response.json())
      .then(response => setMovie(response))
      .catch(err => console.error(err));

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, options)
      .then(response => response.json())
      .then(response => { setTrailer(response.results.find(res => res.name === 'Official Trailer' || 'Main Trailer')) })
      .catch(err => console.error(err));

    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations`, options)
      .then(response => response.json())
      .then(response => setSimilar(response.results))
      .catch(err => console.error(err));

  }, [id]);

  if (!movie && !trailer) {
    return <div>Loading...</div>;
  }

  // console.log(tv);

  return (
    <Wrapper className='px-4 '>
      <main className=" mt-14 md:px-10">
        <section className="w-full md:w-[1026px] mx-auto md:flex items-center justify-between">
          <div className="w-[90vw] md:w-1/2">
            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w1280${movie.poster_path}` : no_img} alt="" className=" w-[350px] h-[520px] rounded-xl" />
          </div>
          <div className="w-full mt-10 md:w-1/2 ">
            <h4 className=" text-4xl font-bold text-grey-50 mb-6 leading-normal">{movie.original_title}</h4>
            <p className=" text-[16px] text-grey-300 mb-5">{movie.overview}</p>
            <div className=" w-fit text-sm px-2 py-1 rounded-lg flex items-center gap-1 text-rating-main bg-black bg-opacity-[0.65] mb-5">
              <SlStar />
              <span className=" mt-[0.8px]">{movie.vote_average?.toFixed(1)}</span>
            </div>
            <div>
              <p className=" text-grey-400 mr-2 mb-3">Released Date:</p>
              <span className="movie-info">
                {movie.release_date
                  || movie.first_air_date
                  || "No release date"}
              </span>
            </div>
            <div>
              <p className="text-grey-400 mr-2 mb-3">Run time:</p>
              <span className="movie-info">{Math.floor(movie.runtime / 60)} hr {
                movie.runtime % 60
              } mins</span>
            </div>
            <div className=" text-primary-400 mb-3 flex items-center gap-3 font-semibold">
              <p className=" text-grey-400 font-normal">Available in:</p>
              <span> 720p </span>
              <span>1080p</span>
              <span>2160p</span>
            </div>

            <button className=" flex items-center gap-2 px-6 py-2 bg-primary-400 rounded-md text-white font-normal mt-5 hover:bg-primary-600 transition-all duration-300">
              Download
              <HiOutlineDownload />
            </button>
          </div>
        </section>

        <section className=" mt-20">
          <h2 className=" text-4xl font-semibold text-white mb-10">Watch Trailer</h2>

          <div className=" flex items-center justify-between gap-5 ">
            <div className="w-full md:w-1/3">
              {
                trailer
                  ? <iframe className="h-60 w-full" src={`https://www.youtube.com/embed/${trailer.key}`} />
                  : <img src="https://assetsio.reedpopcdn.com/former-aeon-must-die-developer-uses-dmca-to-force-trailer-off-publishers-youtube-channel-1631801752009.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp" className=" h-60 w-full" />
              }

            </div>
            <div className="hidden md:block w-1/3 trailer-banner relative">
              <img src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}` : no_img} alt="" className=" h-60 w-full" />
            </div>
            <div className="hidden w-1/3 trailer-banner relative h-60 md:flex items-start overflow-y-hidden">
              <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w1280${movie.poster_path}` : no_img} alt="" />
            </div>
          </div>
        </section>

        <section className=" mt-28">
          <h2 className=" text-4xl font-semibold text-white mb-20">You May Also Like</h2>

          <div className=" grid grid-cols-1 md:grid-cols-4 w-fit gap-9">
            {similar.slice(0, 8).map(movie => (
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
        </section>
      </main>
    </Wrapper>
  )
}

export default Detail