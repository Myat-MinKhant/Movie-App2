import { Link } from "react-router-dom"
import CardContainer from "../CardContainer/CardContainer"
import Wrapper from "../Wrapper/Wrapper"
import { useContext } from "react"
import { MoviesContext } from "../../context/ContextProvider"

const Trending = () => {
    const { trending } = useContext(MoviesContext)

    return (
        <Wrapper>
            <div className=" w-fit">
                <Link to={`/trending/1`}>
                    <h2 className=' text-4xl font-semibold text-white mb-16 mt-28'>Trending Right Now</h2>
                </Link>
            </div>
            <CardContainer movies={trending} />
        </Wrapper>
    )
}

export default Trending