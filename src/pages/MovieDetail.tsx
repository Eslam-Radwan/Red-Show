import { useQuery } from "@tanstack/react-query";
import { movieDetail } from "../utils/movies";
import { useParams } from "react-router";
import { getImage } from "../utils/common";
import type { movie } from "../types/movie";
import Header from "./components/Header";
import Footer from "./components/Footer";

const MovieDetail = () => {
    const {id} = useParams() 
    const {data}= useQuery({queryKey:['movieDetail'], queryFn: () => movieDetail(id as string)}) as {data: movie}
    return (
        <div>
            <Header/>
            <img src={getImage(data?.poster_path    )} alt="" />
            <h1>{data?.title}</h1>
            <p>{data?.overview}</p>
            <p>{(new Date(data?.release_date)).getFullYear()}</p>
            <Footer/>
        </div>  
    )
}
export default MovieDetail;