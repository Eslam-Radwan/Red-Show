import { Form, useActionData } from "react-router";
import MovieGrid from "../components/MovieGrid";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";

const Signup = () => {

    const actionData = useActionData();
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    
    useEffect(() => {
        console.log("hello from useEffect")
        setIsLoading(false);
        if(actionData?.error)
        {
            setIsError(true)
            setTimeout(() => {
                setIsError(false)
            },2000)
        }
    },[actionData])

    const handleSubmit = () => {
        setIsLoading(true)
    }

    return (
        <div className="flex bg-black">
            <div className="flex-1/2 h-dvh relative overflow-hidden">
                <span className="absolute z-1 w-full h-dvh bg-gradient-to-b from-black from-5% via-transparent to-black to-95%"></span>
                <MovieGrid />
            </div>
            <div className="flex-2/3 flex gap-4 flex-col h-dvh rounded-l-4xl bg-white justify-center items-center">

                <h1 className="text-7xl -mt-[100px] mb-[90px]">Sign Up</h1>
                <button className="border p-3 w-96 rounded-2xl cursor-pointer flex justify-center items-center gap-3"><FcGoogle />Signup with Google</button>
                <Form onSubmit={handleSubmit} method="post" className="grid gap-5 justify-center items-center content-center">
                    <input required className="border-b outline-none p-2 border-gray-300 col-start-1 " type="text" name="first" id="first" placeholder="First Name" />
                    <input required className="border-b outline-none p-2 border-gray-300 col-start-2" type="text" name="last" id="last" placeholder="Last Name" />
                    <input required className="border-b outline-none p-2 border-gray-300 col-span-2" type="text" name="email" id="email" placeholder="Email Address" />
                    <input required className="border-b outline-none p-2 border-gray-300 col-span-2" type="password" name="password" id="password" placeholder="Password" />
                    <input required className="border-b outline-none p-2 border-gray-300 col-span-2" type="password" name="rpassword" id="rpassword" placeholder="Repeat Password" />
                    <button type="submit" className="bg-black text-white rounded-2xl py-3 px-10 col-span-2 w-max justify-self-center  flex gap-3 items-center">{isLoading && <AiOutlineLoading3Quarters className="animate-spin text-xl"/>}Sign Up</button>
                    <p className="w-fit col-span-2 justify-self-center">already have an accound <Link className="underline" to='/login'>Login</Link></p>
                </Form>
            </div>
            <span className={`transition-opacity duration-1000 opacity-[${isError === true? "100":"0"}]`}><Modal message={actionData?.error} color="red"/></span>
        </div>


    )
}

export default Signup;