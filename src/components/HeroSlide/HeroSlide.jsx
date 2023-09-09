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
        <Swiper
            slidesPerView={1}
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            className=" w-[90vw] h-[80vh] rounded-3xl" 
            autoplay={
                {
                    delay: 7000,
                    disableOnInteraction: false
                }
            }
        >

            {nowPlaying?.slice(0, 5).map(movie => (
                <SwiperSlide
                    key={movie.id}
                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`, backgroundSize: 1440 }}
                    className=' flex justify-start items-center'
                >
                    <Wrapper>
                        <div className=' w-1/2 mt-10 max-w-[600px]'>
                            <h1 className=' text-6xl text-white font-semibold mb-5'>{movie.title}</h1>
                            <p className=' text-white'>{movie.overview}</p>
                        </div>
                    </Wrapper>
                </SwiperSlide>
            ))
            }
        </Swiper>
    )
}

export default HeroSlide