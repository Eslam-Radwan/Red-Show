import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies } from "../utils/fetchPopularMovies";
import type { movie } from "../types/movie";

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;
const MovieGrid = () => {
    const { data, isLoading, error } = useQuery({ queryKey: ['popularMovies'], queryFn: fetchPopularMovies })


    return (
        <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-wrap gap-10">
                {
                    data?.map((movie: movie) => {
                        return (
                        <img className="w-[200px] rounded-2xl" src={`${IMAGE_URL}/${movie.poster_path}`} alt="" />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MovieGrid;