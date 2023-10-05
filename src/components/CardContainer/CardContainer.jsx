import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import MovieCard from '../Card/MovieCard';

const CardContainer = ({ movies }) => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={20}
            freeMode={true}
            // navigation={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination, Navigation]}
            className=" w-full h-[370px]"
            breakpoints={{
                320: {
                    slidesPerView: 1.2,
                    spaceBetween:10,
                },
                390: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,

                },
                440: {
                    slidesPerView: 1.7,
                    spaceBetween: 10,

                },
                540: {
                    slidesPerView: 2,
                    spaceBetween: 10,

                },
                620: {
                    slidesPerView:2.5,
                    spaceBetween: 20,
                },
                750: {
                    slidesPerView: 2.7,
                    spaceBetween:20,
                },
                840: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3.3,
                    spaceBetween: 20
                },
                1100: {
                    slidesPerView: 3.5,
                    spaceBetween: 20
                },
                1200: {
                    slidesPerView: 3.8,
                    spaceBetween: 20
                },
                1350:{
                    slidesPerView: 4.3,
                    spaceBetween: 20,
                },
                1440: {
                    slidesPerView: 4.5,
                    spaceBetween: 20,
                }
            }}
        >
            {movies?.length !== 0 && movies?.map(movie => (
                <SwiperSlide key={movie.id}>
                    <MovieCard
                        poster_path={movie.poster_path}
                        original_title={movie.original_title || movie.name}
                        release_date={movie.release_date || movie.first_air_date}
                        overview={movie.overview}
                        id={movie.id}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default CardContainer