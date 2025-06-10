const Modal = ({message, color}:{message:string, color:string}) => {
    return (
        <>
        <div className={`w-[400px] h-[80px] bg-stone-200 p-5 border-t-2 border-t-[${color}] fixed bottom-5  right-5`} >
            {message}
        </div>
        </>
    )
}

export default Modal;