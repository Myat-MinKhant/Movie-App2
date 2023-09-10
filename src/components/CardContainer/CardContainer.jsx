import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import MovieCard from '../Card/MovieCard';

const CardContainer = ({ movies }) => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={20}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className=" w-full h-[370px]"
            breakpoints={{
                640: {
                    slidesPerView:3.2,
                    spaceBetween:5,
                },
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