import { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero"; 
import MovieCategoris from "../components/MovieCategoris";
const Home = () => {
    const div = useRef<HTMLDivElement>(null)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(div.current)
            div.current.style.top = `${Math.max(div.current?.getBoundingClientRect().top - window.innerHeight * 0.8 , 0)}px`
        })
    },[])
  return (
        <div className="bg-[#141414] text-white transition-all">
            <div className="w-[1440px] relative mx-auto"><Header/></div>
            <Hero/>
            <div ref={div} className="relative transition-all ease-linear">
                <MovieCategoris/>
            </div>  
            <Footer/>
        </div>
    )
}

export default Home;
