import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Favourites from "./pages/favourites/favourites";
import MovieFighter from "./pages/movie-fighter/movie-fighter";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import ActionMovies from "./pages/movies/actionMovies/actionMovies";
import Movie from "./pages/movies/movie";
import Footer from "./components/footer/footer";
import AdventureMovies from "./pages/movies/adventureMovies/adventureMovies";
import AnimationMovies from "./pages/movies/animationMovies/animationMovies";
import ComedyMovies from "./pages/movies/comedyMovies/comedyMovies";
import FamilyMovies from "./pages/movies/familyMovies/familyMovies";
import FantasyMovies from "./pages/movies/fantasyMovies/fantasyMovies";
import HorrorMovies from "./pages/movies/horrorMovies/horrorMovies";
import ThrillerMovies from "./pages/movies/thrillerMovies/thrillerMovies";
import ActionTV from "./pages/tv-series/actionTV/actionTV";
import AnimationTV from "./pages/tv-series/animationTV/animationTV";
import ComedyTV from "./pages/tv-series/comedyTV/comedyTV";
import DocumentaryTV from "./pages/tv-series/documentaryTV/documentaryTV";
import FamilyTV from "./pages/tv-series/familyTV/familyTV";
import MysteryTV from "./pages/tv-series/mysteryTV/mysteryTV";
import RealityTV from "./pages/tv-series/realityTV/RealityTV";
import TvSeries from "./pages/tv-series/tv-series";

function App() {
  return (
    <div className="container-fluid movie-app">
      <Header />
      <Routes>
        <Route path="action" element={<ActionMovies />} />
        <Route path="adventure" element={<AdventureMovies />} />
        <Route path="animation" element={<AnimationMovies />} />
        <Route path="comedy" element={<ComedyMovies />} />
        <Route path="family" element={<FamilyMovies />} />
        <Route path="fantasy" element={<FantasyMovies />} />
        <Route path="horror" element={<HorrorMovies />} />
        <Route path="thriller" element={<ThrillerMovies />} />

        <Route path="actionTV" element={<ActionTV />} />
        <Route path="animationTV" element={<AnimationTV />} />
        <Route path="comedyTV" element={<ComedyTV />} />
        <Route path="documentaryTV" element={<DocumentaryTV />} />
        <Route path="familyTV" element={<FamilyTV />} />
        <Route path="mysteryTV" element={<MysteryTV />} />
        <Route path="realityTV" element={<RealityTV />} />

        <Route path="favourites" element={<Favourites />} />
        <Route path="movie-fighter" element={<MovieFighter />} />
        <Route path="home" element={<Home />} />
        <Route path="home/:movieId" element={<Movie />} />

        <Route path="home/tv/:seriesId" element={<TvSeries />} />

        <Route path="home/favourites" element={<Favourites />} />
        <Route path="home/home" element={<Home />} />
        <Route path="Movie-App" element={<Home />} />
        <Route path="" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
