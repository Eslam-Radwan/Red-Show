import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero"; 
import MovieCategoris from "../components/MovieCategoris";
const Home = () => {
  return (
        <div>
            <div className="w-[1440px] relative mx-auto"><Header/></div>
            <Hero/>
            <MovieCategoris/>
            <Footer/>
        </div>
    )
}

export default Home;
