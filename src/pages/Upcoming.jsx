// import { useContext } from "react"
// import { MoviesContext } from "../context/ContextProvider"
import Wrapper from "../components/Wrapper/Wrapper"
import PageContainer from "../components/PageContainer/PageContainer"

const Upcoming = () => {
  // const { upComing } = useContext(MoviesContext)
  return (
    <Wrapper>
      <PageContainer category={'upcoming'} />
    </Wrapper>
  )
}

export default Upcoming