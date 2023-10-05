import Wrapper from "../components/Wrapper/Wrapper"
import { SlStar } from 'react-icons/sl';
import { HiOutlineDownload } from 'react-icons/hi';
import MovieCard from "../components/Card/MovieCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import no_img from '../assets/NoImage.jpg'
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
// import "react-loading-skeleton/dist/skeleton.css";
import { PortalWithState } from "react-portal";
import DownloadPopup from "../components/Download";

const Detail = () => {
  const [movie, setMovie] = useState({});
  const [trailer, setTrailer] = useState({});
  const [similar, setSimilar] = useState([]);
  const [downloadOpt, setDownloadOpt] = useState([])
  // const [loading, setLoading] = useState(true)
  const { id } = useParams();
  const imdb_code = movie ? movie.imdb_id : "";


  // console.log(id);
  // console.log(imdb_code);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmYzNGFkMDlmOGQ4Y2I1MjcxOTYwOTdhZjA2ZTZmYyIsInN1YiI6IjY0YTQyY2QwZTlkYTY5MDBjNzYzZmE5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pz3w5x8vT6YWUX2VoQFhwaJDQT26g5srzBZQ337uAvM'
      }
    };

    // setTimeout(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
      .then(response => response.json())
      .then(response => setMovie(response))
      // .then(setLoading(false))
      .catch(err => console.error(err));
    // }, 1000)

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, options)
      .then(response => response.json())
      .then(response => { setTrailer(response.results.find(res => res.name === 'Official Trailer' || 'Main Trailer')) })
      .catch(err => console.error(err));

    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations`, options)
      .then(response => response.json())
      .then(response => setSimilar(response.results))
      .catch(err => console.error(err))
    
    fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${imdb_code}`)
      .then(res => res.json())
      .then(res => setDownloadOpt(res.data.movies[0].torrents));

  }, [id, imdb_code]);

  function handleDownloadOpen() {
    document.body.classList.add("portal-open");
  }

  function handleDownloadClose() {
    document.body.classList.remove("portal-open");
  }

  // function removeDuplicate() {
  //   var result = movie.data.movies[0].torrents.reduce((unique, o) => {
  //     if (!unique.some((obj) => obj.quality === o.quality)) {
  //       unique.push(o);
  //     }
  //     return unique;
  //   }, []);

  console.log(downloadOpt)

  //   return result;
  // }

  return <Wrapper className='px-4 mt-20'>
    {/* <main className=" "> */}
    <section className="w-full xl:w-[1026px] xl:mx-auto md:flex items-start justify-between">
      <div className="w-[90vw] md:w-1/2">
        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w1280${movie.poster_path}` : no_img} alt="" className=" w-[350px] h-[520px] rounded-xl mx-auto xl:mx-0" />
      </div>
      <div className="w-full md:w-1/2 mt-7 lg:mt-3">
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


        {/* <button className=" flex items-center gap-2 px-6 py-2 bg-primary-400 rounded-md text-white font-normal mt-5 hover:bg-primary-600 transition-all duration-300" onClick={handleDownloadOpen}>
          Download
          <HiOutlineDownload />
        </button> */}

        {downloadOpt.length > 0 ? (
          <>
            <div className=" text-primary-400 mb-3 flex items-center flex-wrap gap-3 font-semibold">
              <p className=" text-grey-400 font-normal">Available in:</p>
              {downloadOpt?.map(DInfo => (
                <span key={DInfo}>{DInfo.quality}</span>
              ))}
            </div>
            <PortalWithState
              closeOnOutsideClick
              closeOnEsc
              onOpen={handleDownloadOpen}
              onClose={handleDownloadClose}
            >
              {({ openPortal, isOpen, portal }) => (
                <>
                  <button
                    onClick={openPortal}
                    className=" flex items-center gap-2 px-6 py-2 bg-primary-400 rounded-md text-white font-normal mt-5 hover:bg-primary-600 transition-all duration-300"
                  >
                    Download
                    <span>
                      <HiOutlineDownload className="w-5 h-5 ml-2" />
                    </span>
                  </button>

                  {portal(
                    <DownloadPopup
                      isOpen={isOpen}
                      result={downloadOpt}
                    />
                  )}
                </>
              )}
            </PortalWithState>
          </>
        )
          : (null)
        }
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

    {similar.length > 0 ? (
      <section className=" mt-28">
        <h2 className=" text-4xl font-semibold text-white mb-20">You May Also Like</h2>

        <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:mx-auto w-fit gap-9">
          {similar.slice(0, 10).map(movie => (
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
    ) : (null)
    }
    {/* </main> */}
  </Wrapper>
}
// }

export default Detail