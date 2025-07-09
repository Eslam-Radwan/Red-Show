import { useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero"; 
import MovieCategoris from "./sections/MovieCategoris";
import Devices from "./sections/Devices";
import FAQ from "./sections/FAQ";
import Banner from "./components/Banner";
const Home = () => {
    const movieCategoryDiv = useRef<HTMLDivElement>(null)
    const devicesDiv = useRef<HTMLDivElement>(null)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(movieCategoryDiv.current)
            movieCategoryDiv.current.style.top = `${Math.max(movieCategoryDiv.current?.getBoundingClientRect().top - window.innerHeight * 0.8 , 0)}px`
            if(devicesDiv.current)
            devicesDiv.current.style.top = `${Math.max(devicesDiv.current?.getBoundingClientRect().top - window.innerHeight , 0)}px`
        })
    },[])
  return (
        <div className="bg-[#141414] text-white transition-all">
            <Header/>
            <Hero/>
            <div ref={movieCategoryDiv} className="relative transition-all ease-linear"><MovieCategoris/></div>
            <div ref={devicesDiv} className="transition-all relative"> <Devices/>  </div>
            <FAQ/>
            <Banner/>
            <Footer/>
        </div>
    )
}

export default Home;
