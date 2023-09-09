import { useContext } from "react"
import { MoviesContext } from "../../context/ContextProvider"
import Wrapper from "../Wrapper/Wrapper"
import CardContainer from "../CardContainer/CardContainer"
import { Link } from "react-router-dom"

const Upcoming = () => {
    const { upComing } = useContext(MoviesContext)

    return (
        <Wrapper>
            <Link to='/upcoming'>
                <h2 className=' text-4xl font-semibold text-white mb-16 mt-28'>Upcoming</h2>
            </Link>
            <CardContainer movies={upComing} />
        </Wrapper>
    )
}

export default Upcoming