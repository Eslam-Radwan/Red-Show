import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PopularMovies from "../components/PopularMovies";
import PopularTV from "../components/PopularTV";
import TopMovies from "../components/TopMovies";
import TopTV from "../components/TopTV";

const Home = () => {

    return (
        <>
            <div className="w-[1440px] relative mx-auto"><Header/></div>
            <Hero/>
            <PopularMovies/>
            <TopMovies/>
            <PopularTV/>
            <TopTV/>
            <Footer/>
        </>
    )
}

export default Home;
