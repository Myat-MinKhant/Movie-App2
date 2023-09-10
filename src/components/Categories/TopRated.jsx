import { useContext } from "react"
import { MoviesContext } from "../../context/ContextProvider"
import CardContainer from "../CardContainer/CardContainer"
import { Link } from "react-router-dom"
import Wrapper from "../Wrapper/Wrapper"

const TopRated = () => {
    const { topRated } = useContext(MoviesContext)

    return (
        <Wrapper>
            <div className=" w-fit">
                <Link to='/top_rated/1'>
                    <h2 className=' text-4xl font-semibold text-white mb-16 mt-28'>Top Rated</h2>
                </Link>
            </div>
            <CardContainer movies={topRated} />
        </Wrapper>
    )
}

export default TopRated