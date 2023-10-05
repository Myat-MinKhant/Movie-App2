// import { useContext } from "react"
// import { MoviesContext } from "../context/ContextProvider"
import PageContainer from "../components/PageContainer/PageContainer"

const TopRated = () => {
    // const { topRated } = useContext(MoviesContext)
    return (
            <PageContainer category={'top_rated'} />
    )
}

export default TopRated