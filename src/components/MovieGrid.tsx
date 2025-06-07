import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies } from "../utils/fetchPopularMovies";
import type { movie } from "../types/movie";

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;
const MovieGrid = () => {
    const { data, isLoading, error , isError} = useQuery({ queryKey: ['popularMovies'], queryFn: fetchPopularMovies })


    let content;
    if (isLoading)
    {
        content =  <> Loading...</>
            
        
    }
    else if (isError)
    {
        content = <>
        <p>Error Occured</p>
        <p>{error.message}</p>
        </>
    }
    else if (data)
    {
        console.log(data);
        
        content = data?.map((movie: movie) => {
                        return (
                        <img key={movie.id} className="w-[200px] rounded-2xl" src={`${IMAGE_URL}/w200/${movie.poster_path}`} alt="" />
                        )
                    })
        
    }
    
    return (
        <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-wrap gap-10">
                {
                    content
                }
            </div>
        </div>
    )
}

export default MovieGrid;