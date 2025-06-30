import { useNavigate } from "react-router";
import type { movie } from "../types/movie";
import { useRef } from "react";

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL
const HomeCarousel = ({data, title, isMovie}:{title:string, data: movie[], isMovie: boolean}) => {
    const imageContainer = useRef<HTMLDivElement>(null)
    const navigate = useNavigate();

    const left = () => {
        const transform = (imageContainer.current as HTMLDivElement).style.transform;
        const numbers = transform.match(/-?\d+/g);
        if(numbers)
        (imageContainer.current as HTMLDivElement).style.transform = `translateX(${Math.min(Number(numbers[0]) + 800,0)}px)`
        
    }

    const right = () => {
        const transform = (imageContainer.current as HTMLDivElement).style.transform;
        const numbers = transform.match(/-?\d+/g);         
        if(numbers)
        (imageContainer.current as HTMLDivElement).style.transform = `translateX(${Math.max(Number(numbers[0]) - 800,-(20*200+19*20 - 1440 ))}px)`
        else
        (imageContainer.current as HTMLDivElement).style.transform = `translateX(-1000px)`
        
    }

 return (
    <div className=" flex flex-col gap-5 py-[100px] w-[1440px] mx-auto">
        <div className="flex justify-between">
            <h1 className="text-4xl">{title}</h1>
            <div className="flex gap-3">
                <button onClick={left} className="rounded-full bg-white text-black px-5">&#60;</button>
                <button onClick={right} className="rounded-full bg-white text-black px-5">&#62;</button>
            </div>
        </div>
        <div className="overflow-hidden border-[10px] border-black rounded-2xl outline-8 outline-red-500">
            <div ref={imageContainer} className="flex gap-5 duration-600 ease-out transition-all">
            {

                data?.map((ele) => {
                    return (
                    <img id={ele.id} onClick={isMovie? () => navigate(`/movie/${ele.id}`):() => navigate(`/show/${ele.id}`)} className="w-[200px] hover:scale-[80%] transition-all" src={`${IMAGE_URL}/w200${ele.poster_path}`} alt="" />
                    )
                })
            }
            </div>
        </div>
    </div>
    )
}
export default HomeCarousel;