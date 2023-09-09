// import { useContext } from "react"
// import { MoviesContext } from "../context/ContextProvider"
import Wrapper from "../components/Wrapper/Wrapper"
import PageContainer from "../components/PageContainer/PageContainer"

const TopRated = () => {
    // const { topRated } = useContext(MoviesContext)
    return (
        <Wrapper>
            <PageContainer category={'top_rated'} />
        </Wrapper>
    )
}

export default TopRated