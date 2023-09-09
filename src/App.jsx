import { MoviesProvider } from "./context/ContextProvider"
import Footer from "./layouts/Footer/Footer"
import Navbar from "./layouts/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ScrollToTop from "./util/ScrollToTop"
import Trending from "./pages/Trending"
import Popular from "./pages/Popular"
import TopRated from "./pages/TopRated"
import Upcoming from "./pages/Upcoming"
import Detail from "./pages/Detail"
import Home from "./pages/Home"
// import MoviePage from "./pages/MoviePage"


function App() {
  return (
    <Router>
      <ScrollToTop />
      <MoviesProvider>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path={`/trending`} element={<Trending />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/top_rated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
        </Routes>
        {/* <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/trending/:page" element={<MoviePage movieType="trending" />} />
          <Route path="/popular/:page" element={<MoviePage movieType="popular" />} />
          <Route path="/top-rated/:page" element={<MoviePage movieType="top-rated" />} />
          <Route path="/upcoming/:page" element={<MoviePage movieType="upcoming" />} />
        </Routes> */}
        <Footer />
      </MoviesProvider>
    </Router >
  )
}

export default App
