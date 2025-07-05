import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getImage } from "../utils/common";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { tvDetail } from "../utils/shows";
import type { show } from "../types/show";

const TVDetail = () => {

    const {id} = useParams()
    const {data} = useQuery({queryKey:['tvDetail'] , queryFn: () => tvDetail(id as string)}) as {data: show}
    
    return (
        <div>
            <Header/>
            <img src={getImage(data?.poster_path)} alt="" />
            <h1>{data?.name}</h1>
            <p>{data?.overview}</p>
            <p>{data?.last_air_date}</p>
            <Footer/>
        </div>  
    )
}
export default TVDetail;