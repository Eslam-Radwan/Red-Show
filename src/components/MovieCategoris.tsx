import { useEffect, useState } from "react";
import { moviesGenres } from "../utils/movies";
import MovieGrid from "./MovieGrid";

const MovieCategoris = () => {

    const [genres, setGenres] = useState()
   useEffect(()=>{
   (async()=>{
    const data = await moviesGenres();
    console.log(data);
    
    setGenres (data.genres);   
   })()
   },[])
    
    return (
        <div>
            <h1>Explore our wide variety of categories</h1>
            <p>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
           <div className="flex gap-5 p-5 overflow-hidden">
            {
                genres?.map((genre)=>{
                    return(
                        <div id={genre.id}>
                            <div className="min-w-[400px] bg-black text-white rounded-2xl p-5">
                                    <MovieGrid genreId={genre.id} square={true} count={4}/>
                                {genre.name}
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default MovieCategoris;