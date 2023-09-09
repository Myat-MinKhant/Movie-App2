import Popular from "../components/Categories/Popular";
import TopRated from "../components/Categories/TopRated";
import Trending from "../components/Categories/Trending";
import Upcoming from "../components/Categories/Upcoming";
import HeroSlide from "../components/HeroSlide/HeroSlide";

export default function Home() {
    return (
        <>
            <HeroSlide />
            <Trending />
            <Popular />
            <TopRated />
            <Upcoming />
        </>
    )
}