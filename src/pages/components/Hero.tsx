import MovieGrid from "./MovieGrid";
import logo2 from '../../assets/Logo2.svg'
const Hero = () => {
 return (
    <>
    <div className="relative bg-[#141414] flex flex-col items-center h-dvh overflow-hidden">
        <span className="absolute w-[100%] h-[100%] bg-gradient-to-b from-[#141414] via-[#141414]/50 to-[#141414] "></span>
        <div className="flex flex-wrap gap-5 justify-center">
            <MovieGrid count={33}/>
        </div>
        <img className="absolute top-[150px]" src={logo2} alt="" />
        <div className="text-white z-2 absolute text-center flex flex-col gap-5 max-w-[1440px] items-center bottom-[100px]">
            <h1 className="text-5xl">The Best Streaming Experience</h1>
            <p className="max-w-[1000px]">StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
            <button className="bg-red-700 w-fit p-5 rounded-2xl">Start Watching Now</button>
        </div>
    </div>
    </>
    )
}
export default Hero;