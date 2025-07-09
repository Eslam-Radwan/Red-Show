import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";


const Slider = ({ ItemsPerPage, totalItems, rightClick, leftClick }: { ItemsPerPage: number, totalItems: number, rightClick: () => void, leftClick: () => void }) => {
    const [currentPage, setCurrentPage] = useState(0)

    const handleClick = (id: number) => {
        setCurrentPage(id);
    }
    const right = () => {
        setCurrentPage(Math.min(Math.ceil(totalItems / ItemsPerPage) - 1, (currentPage + 1)))
        rightClick();
    }
    const left = () => {
        setCurrentPage(Math.max(0, (currentPage - 1)))
        leftClick();
    }
    const func = () => {
        console.log(totalItems, ' ', ItemsPerPage);
        const arr = []
        for (let i = 0; i < Math.ceil(totalItems / ItemsPerPage); i++) {
            arr.push(<div key={i} onClick={() => handleClick(i)} className={` ${currentPage === i ? 'bg-red-600 w-[20px]' : 'bg-[#333333] w-[8px]'} h-[3px]`}></div>)
        }
        return arr
    }
    return (
        <div className="flex items-center gap-2">
            <button onClick={left} className="rotate-180 bg-[#1A1A1A] p-5 rounded-2xl"><FaArrowRightLong /></button>
            <div className="flex gap-2">
                {
                    func()
                }
            </div>
            <button onClick={right} className=" bg-[#1A1A1A] p-5 rounded-2xl"><FaArrowRightLong /></button>

        </div>
    )

}
export default Slider;