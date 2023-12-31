import { Link } from 'react-router-dom';
import no_img from '../../assets/NoImage.jpg'

const MovieCard = ({ poster_path, original_title, release_date, overview, id }) => {
    const imgApi = "https://image.tmdb.org/t/p/w1280";
    const imagePath =poster_path ? imgApi + poster_path : no_img;
    const truncatedTitle = original_title?.length > 10
        ? original_title.slice(0, 10) + "..."
        : original_title;
    const formattedDate = release_date || "No release date";
    const truncatedOverview = overview?.length > 150
        ? overview.slice(0, 150) + "..."
        : overview;

    return (
        <Link to={`/detail/${id}`}>
            <div className=" w-full max-w-[300px] mx-auto md:mx-0 h-[360px] md:h-[344px] relative overflow-hidden rounded-lg text-[14px] leading-[20px] card-transtion hover:cursor-pointer">
                {/* <div className="w-full md:w-fit h-fit relative overflow-hidden rounded-lg text-[14px] leading-[20px] card-transtion"> */}
                    {/* {imageLoaded && ( */}
                    <img src={imagePath} alt={original_title} loading='lazy' className=" w-full h-full" />
                    {/* )} */}
                {/* </div> */}
                <div className=" w-full absolute bottom-0 left-0 pt-[100px] pb-[15px] px-[10px] card-transtion bg-gradient-to-b from-[#33374500] to-[#101528] group" >
                    <div className=" flex items-center justify-between py-2">
                        <div className="">
                            <h3 className=" font-semibold text-white">{truncatedTitle}</h3>
                            <span className=" text-skyblue-main">{formattedDate}</span>
                        </div>
                        <Link to={`/detail/${id}`}>
                            <button className=' text-white cursor-pointer py-[6px] px-2 rounded-lg border border-[rgba(255, 255, 255, 0.5)] card-transtion group-hover:bg-blue-main group-hover:border-blue-main'>
                                See Detail
                            </button>
                        </Link>
                    </div>
                    <div className="text-white max-h-0 opacity-0 border-t border-t-[rgba(255, 255, 255, 0.3)] overflow-hidden card-transtion group-hover:max-h-[200px] group-hover:opacity-100 group-hover:py-2">
                        {truncatedOverview || "No overview yet..."}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard