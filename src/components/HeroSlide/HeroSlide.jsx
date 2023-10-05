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
            <Wrapper>
                <Swiper
                    slidesPerView={1}
                    modules={[Autoplay, Pagination, Navigation]}
                    pagination={{
                        clickable: true,
                    }}
                    simulateTouch={false}
                    navigation={false}
                    className=" h-[80vh]"
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
                            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`, backgroundSize: 1280 }}
                            className='hero-banner bg-no-repeat bg-cover'
                        >
                            <Wrapper>
                                <div className='w-full lg:w-1/2 mt-10 max-w-[600px] absolute z-30 bottom-20 md:ml-5 md:bottom-24'>
                                    <h1 className=' mt-32 text-5xl text-center md:text-start md:text-6xl text-white font-semibold mb-5'>{movie.title}</h1>
                                    <p className=' text-white'>{movie?.overview.length > 200 ? movie?.overview.slice(0, 200) + '...' : movie?.overview}</p>
                                </div>
                            </Wrapper>
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            </Wrapper>
        )
}

export default HeroSlide