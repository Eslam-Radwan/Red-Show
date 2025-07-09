import MovieGrid from "./MovieGrid";

const Banner = () => {
    return (
        <div className="max-w-[1440px] mx-auto relative rounded-xl overflow-hidden my-10 ">
            
            <div className="flex flex-col justify-center top-[40%] left-[5%] z-1 absolute">
                <h1 className="text-4xl mb-5 relative z-1">Start Your free trial today</h1>
                <p className="relative z-1">This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>

            </div>
           <div className="flex flex-wrap justify-center scale-120 gap-3 ">
                <MovieGrid square count={36}/>
            </div>
           <div className="rounded-xl w-[100%] h-[100%] bg-gradient-to-r from-[#0F0F0F] from-10% via-[#0F0F0F]/90 to-red-700/50 absolute top-0"></div>
        </div>
    )
}
export default Banner;