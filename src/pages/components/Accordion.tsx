import { useState } from "react";

interface accordtionInterface {
    title:string;
    description:string;
    number:string;
}
const Accordion = ({title, description, number}: accordtionInterface) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex flex-col">
        <div onClick={() => setIsOpen(!isOpen)} className={`transition-all duration-300 flex items-start rounded-2xl p-10 gap-5 overflow-clip ${isOpen? 'max-h-[2000px]':'max-h-[130px]'}`}>
            <div className="bg-[#1F1F1F] p-4 rounded-xl">{number}</div>
            <div>
                <div className="mt-5">{title}</div>
                <div className="mt-10">{description}</div>
            </div>
        </div>
        <div className="h-[1px] w-[80%] bg-gradient-to-r from-black via-red-600 via-20%     to-black"></div>
        </div>
    )
}
export default Accordion;