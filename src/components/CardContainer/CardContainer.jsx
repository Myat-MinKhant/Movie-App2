import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import MovieCard from '../Card/MovieCard';

const CardContainer = ({ movies }) => {
    return (
        <Swiper
            slidesPerView={4.2}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode]}
            className=" w-full h-fit"
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