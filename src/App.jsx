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


function App() {
  return (
    <Router>
      <ScrollToTop />
      <MoviesProvider>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/trending/:page" element={<Trending />} />
          <Route path="/popular/:page" element={<Popular />} />
          <Route path="/top_rated/:page" element={<TopRated />} />
          <Route path="/upcoming/:page" element={<Upcoming />} />
        </Routes>
        <Footer />
      </MoviesProvider>
    </Router>
  )
}


export default App
