import { Link } from 'react-router-dom'
import no_img from '../../assets/NoImage.jpg'
// import Skeleton from '../Skeleton/Skeleton'

const SeaultResultCard = ({ movie, setCloseResults }) => {
    return (
            < Link to={`/detail/${movie.id}`} onClick={() => setCloseResults(true)}>
                <div className=' w-full flex items-start px-5 py-2 gap-4'>

                    {movie.poster_path ? (
                        <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt={`${movie.tilte} Poster`} className=' min-w-[70px] h-[80px] rounded-lg object-fit' />
                    ) : (
                        <img src={no_img} className=' w-[70px] h-[80px] rounded-lg' />
                    )}


                    < div >
                        <h3 className=' font-[500]'>{movie.title}</h3>
                        <p className=' text-sm text-grey-300'>{movie.release_date ? movie.release_date.substring(0, 4) : '-'}</p>
                    </div>
                </div>
            </Link >
        )
}

export default SeaultResultCard