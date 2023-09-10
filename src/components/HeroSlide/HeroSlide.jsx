import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useContext } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Wrapper from '../Wrapper/Wrapper';
import { MoviesContext } from '../../context/ContextProvider';

const HeroSlide = () => {
    const { nowPlaying } = useContext(MoviesContext)

    return (
        <>
            <Swiper
                slidesPerView={1}
                modules={[Autoplay, Pagination, Navigation]}
                pagination={{
                    clickable: true,
                }}
                simulateTouch={false}
                navigation={false}
                className=" w-[90vw] h-[80vh] rounded-lg"
                autoplay={
                    {
                        delay: 6000,
                        disableOnInteraction: false
                    }
                }
            >

                {nowPlaying?.slice(0, 5).map(movie => (
                    <SwiperSlide
                        key={movie.id}
                        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`, backgroundSize: 1440 }}
                        className='flex justify-start md:items-center hero-banner bg-center'
                    >
                        <Wrapper>
                            <div className='w-full md:w-1/2 mt-10 max-w-[600px] absolute z-30 md:bottom-32'>
                                <h1 className=' mt-32 text-5xl text-center md:text-6xl text-white font-semibold mb-5'>{movie.title}</h1>
                                <p className=' text-white'>{movie?.overview.length > 200 ? movie?.overview.slice(0, 200) + '...' : movie?.overview}</p>
                            </div>
                        </Wrapper>
                    </SwiperSlide>
                ))
                }
            </Swiper>
        </>
    )
}

export default HeroSlide