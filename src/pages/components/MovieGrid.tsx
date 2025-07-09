import { useQuery } from "@tanstack/react-query";
import { popularMovies, moviesWithGenre } from "../../utils/movies";
import type { movie } from "../../types/movie";
import { memo } from "react";
import { getImage } from "../../utils/common";



interface MovieGridInterface {
    count?:number;
    square?: boolean;
    genreId?: number;
}
const MovieGrid = ({count = 20, square, genreId}:MovieGridInterface) => {
    const {data,isLoading,isError} = useQuery({
        queryKey: genreId ? [genreId, count] : ['popularMovies', count],
        queryFn: () => genreId ? moviesWithGenre(genreId, count) : popularMovies(count)});
    
    let content;
    if (isLoading || isError)
    {
        const arr=[]
        for(let i = 0; i < 33; i++)
        {
         
            arr.push(<div key={i} className="w-[150px] h-[230px] bg-gray-400  rounded-2xl"></div>)
        }
        content = arr
        
    }
    else if (data)
    {
        console.log('data',data);
        
        content = data?.map((movie: movie) => {
                        return !square? (<img key={movie.id} className="w-[150px] rounded-2xl" src={getImage(movie.poster_path)} alt="" />):
                                (<img key={movie.id} className="w-[100px] h-[100px] object-cover rounded-lg" src={getImage(movie.poster_path)} alt="" />)


                    })
        
    }
    
    return (
        <>
                {
                    content
                }
        </>
    )
}

export default memo(MovieGrid);