// import { useContext } from "react"
// import { MoviesContext } from "../context/ContextProvider"
import Wrapper from "../components/Wrapper/Wrapper"
import PageContainer from "../components/PageContainer/PageContainer"

const Trending = () => {
    // const { trending } = useContext(MoviesContext)
    
    return (
        <Wrapper>
            <PageContainer category={'trending'} />
        </Wrapper>
    )
}

export default Trending