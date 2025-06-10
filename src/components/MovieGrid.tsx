import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies } from "../utils/fetchPopularMovies";
import type { movie } from "../types/movie";
import { memo } from "react";

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;
const MovieGrid = () => {
    const { data, isLoading, isError} = useQuery({ queryKey: ['popularMovies'], queryFn: fetchPopularMovies })

    
    let content;
    if (isLoading || isError)
    {
        const arr=[]
        for(let i=0; i < 30; i++)
        {
         
            arr.push(<div key={i} className="w-[150px] h-[230px] bg-gray-400  rounded-2xl"></div>)
        }
        content = arr
        
    }
    else if (data)
    {
        console.log(data);
        
        content = data?.map((movie: movie) => {
                        return (
                        <img key={movie.id} className="w-[150px]  rounded-2xl" src={`${IMAGE_URL}/w200${movie.poster_path}`} alt="" />
                        )
                    })
        
    }
    
    return (
        <div className="max-w-[1440px] mx-auto  w-dvh h-dvh">
            <div className="flex flex-wrap gap-5 -rotate-[20deg]  w-dvh h-dvh scale-125">
                {
                    content
                }
            </div>
        </div>
    )
}

export default memo(MovieGrid);