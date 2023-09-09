import { useContext } from "react"
import { MoviesContext } from "../../context/ContextProvider"
import CardContainer from "../CardContainer/CardContainer"
import { Link } from "react-router-dom"
import Wrapper from "../Wrapper/Wrapper"

const TopRated = () => {
    const { topRated } = useContext(MoviesContext)

    return (
        <Wrapper>
            <Link to='/top_rated'>
                <h2 className=' text-4xl font-semibold text-white mb-16 mt-28'>Top Rated</h2>
            </Link>
            <CardContainer movies={topRated} />
        </Wrapper>
    )
}

export default TopRated