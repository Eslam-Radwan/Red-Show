import { useEffect, useRef, useState } from "react";
import { moviesGenres } from "../../utils/movies";
import MovieGrid from "../components/MovieGrid";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "../components/Slider";


interface Genre {
    id: number;
    name: string;
}
const MovieCategoris = () => {
    const catContainer = useRef<HTMLDivElement>(null)

    const [genres, setGenres] = useState<Genre[]>()
    useEffect(() => {
        (async () => {
            const data = await moviesGenres();
            console.log(data);

            setGenres(data.genres);
        })()
    }, [])

    const slideRight = () => {

        if(catContainer.current && genres){
            const leftValue = parseInt(catContainer.current.style.transform.match(/-?\d+/)?.[0] || "0", 10);        
            catContainer.current.style.transform = `translateX(${Math.max(-(1440 * (genres?.length / 4 - 1)),leftValue - 1440)}px)`;
        }
        
        

    }
    const slideLeft = () => {
        if(catContainer.current)
        {
            const leftValue = parseInt(catContainer.current.style.transform.match(/-?\d+/)?.[0] || "0", 10);
            catContainer.current.style.transform = `translateX(${Math.min(0,leftValue + 1440)}px)`
        }
    }

    return (
        <div className="">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-5xl">Explore our wide variety of categories</h1>
                        <p className="text-[#999999]">Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
                    </div>
                    <div>
                        {
                        genres &&
                        <Slider leftClick={slideLeft} rightClick={slideRight} ItemsPerPage={4} totalItems={genres.length}/>
                        }
                    </div>
                </div>
                <div className="overflow-hidden ">
                    <div ref={catContainer}  className="flex gap-[60px] py-5 transition-all">

                    {
                        genres?.map((genre) => {
                            
                            return (
                                <div key={genre.id}>
                                    <div className="transition-transform min-w-[300px] bg-[#1A1A1A] text-white rounded-2xl py-5 hover:-translate-y-3">
                                        <MovieGrid genreId={genre.id} square={true} count={4} />
                                        <div className="mx-10 mt-3 items-center justify-between flex">
                                            <span>{genre.name}</span>
                                            <span><FaArrowRightLong/></span>
                                            </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCategoris;