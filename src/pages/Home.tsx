import { useQuery } from "@tanstack/react-query";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeSection from "../components/HomeCarousel"; 
import { popularMovies, popularTV, topMovies, topTV } from "../utils/movies";

const Home = () => {
    const {data: popularMoviesData} = useQuery({queryKey:['popularMovies'], queryFn:() => popularMovies(20)})
    const {data: topMoviesData} = useQuery({queryKey:['topMovies'], queryFn:() => topMovies(20)})
    const {data: popularTVData} = useQuery({queryKey:['popularTV'], queryFn:() => popularTV(20)})
    const {data: topTVData} = useQuery({queryKey:['topTV'], queryFn:() => topTV(20)})
    return (
        <div>
            <div className="w-[1440px] relative mx-auto"><Header/></div>
            <Hero/>
            <div className="bg-black text-white">
                <HomeSection title="Popular Movies" data={popularMoviesData}/>
            </div>
            <div className="bg-black text-white">
                <HomeSection title="Top Rated Movies" data={topMoviesData}/>
            </div>
            <div className="bg-black text-white">
                <HomeSection title="Popular TV-Shows" data={popularTVData}/>
            </div>
            <div className="bg-black text-white">
                <HomeSection title="Top Rated TV-Show" data={topTVData}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;
