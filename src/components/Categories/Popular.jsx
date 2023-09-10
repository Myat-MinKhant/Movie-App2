import { useContext } from "react"
import { MoviesContext } from "../../context/ContextProvider"
import Wrapper from "../Wrapper/Wrapper"
import { Link } from "react-router-dom"
import CardContainer from "../CardContainer/CardContainer"

const Popular = () => {
    const { popular } = useContext(MoviesContext)

    return (
        <Wrapper className='px-4'>
            <div className=" w-fit">
                <Link to='/popular/1'>
                    <h2 className=' text-4xl font-semibold text-white mb-16 mt-28'>Popular</h2>
                </Link>
            </div>
            <CardContainer movies={popular} />
        </Wrapper>
    )
}

export default Popular