import { useContext, type ReactNode } from "react";
import ErrorContext, { type ErrorContextType } from "../../context/errorContext";

const Modal = ({children}:{children:ReactNode}) => {
    const {errorMessage, error} = useContext(ErrorContext) as ErrorContextType
    return (
        <>
        {children}
        
        {
        error
        &&
        <div className={`w-[400px] h-[80px] bg-stone-200 p-5 border-t-2 border-t-red-600 fixed bottom-5  right-5 z-2`} >
            {errorMessage}
        </div>
        }

        </>
    )
}

export default Modal;