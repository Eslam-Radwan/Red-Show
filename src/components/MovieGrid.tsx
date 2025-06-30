import { useQuery } from "@tanstack/react-query";
import { popularMovies } from "../utils/movies";
import type { movie } from "../types/movie";
import { memo } from "react";
import { getImage } from "../utils/common";



interface MovieGridInterface {
    count?:number;
    square?: boolean;
    generId?: number
}
const MovieGrid = ({count = 20, square, generId}:MovieGridInterface) => {
    const { data, isLoading, isError} = useQuery({ queryKey: ['popularMovies', count], queryFn: () => popularMovies(count) })
    

    
    let content;
    if (isLoading || isError)
    {
        const arr=[]
        for(let i = 0; i < 30; i++)
        {
         
            arr.push(<div key={i} className="w-[150px] h-[230px] bg-gray-400  rounded-2xl"></div>)
        }
        content = arr
        
    }
    else if (data)
    {
        console.log(data);
        
        content = data?.map((movie: movie) => {
                        return !square? (<img key={movie.id} className="w-[150px] rounded-2xl" src={getImage(movie.poster_path)} alt="" />):
                                (<img key={movie.id} className="w-[150px] h-[150px] object-cover rounded-2xl" src={getImage(movie.poster_path)} alt="" />)


                    })
        
    }
    
    return (
        <div className="flex gap-5 flex-wrap justify-center p-5">
                {
                    content
                }
        </div>
    )
}

export default memo(MovieGrid);