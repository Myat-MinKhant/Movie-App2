// import { useContext } from "react"
import PageContainer from "../components/PageContainer/PageContainer"
import Wrapper from "../components/Wrapper/Wrapper"
// import { MoviesContext } from "../context/ContextProvider"

const Popular = () => {
    // const { popular } = useContext(MoviesContext)
    return (
        <Wrapper>
            <PageContainer category={'popular'} />
        </Wrapper>
    )
}

export default Popular