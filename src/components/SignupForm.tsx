import { Form, redirect, useActionData } from "react-router"
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useContext, useEffect, useRef, useState } from "react";
import RegistrationContext, { type RegistrationContextType } from "../context/registrationContext";
import ErrorContext, { type ErrorContextType } from "../context/errorContext";


interface singupInterface {
    loginButton: () => void;
}
const SignupForm = ({loginButton}: singupInterface) => {

    const [isLoading, setIsLoading] = useState(false)
    const actionData = useActionData();
    const { setIsLogin} = useContext(RegistrationContext) as RegistrationContextType
    const {setErrorMessage, setError} = useContext(ErrorContext) as ErrorContextType
    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = () => {
        setIsLoading(true)
    }

    useEffect(() => {
        setIsLoading(false)
        if(actionData?.data)
        {
            setIsLogin(true);
            redirect('/login')
        }

    }, [actionData, setIsLogin, setErrorMessage, setError])

    return (
        <div className="flex flex-col gap-5 items-center">
            <h1 className="text-7xl -mt-[100px] mb-[90px]">Sign Up</h1>
            <button className="border p-3 w-96 rounded-2xl cursor-pointer flex justify-center items-center gap-3"><FcGoogle />Signup with Google</button>
            <Form ref={formRef} onSubmit={handleSubmit} method="post" className="grid gap-5 justify-center items-center content-center">
                <input required className="border-b outline-none p-2 border-gray-300 col-start-1 " type="text" name="first" id="first" placeholder="First Name" />
                <input required className="border-b outline-none p-2 border-gray-300 col-start-2" type="text" name="last" id="last" placeholder="Last Name" />
                <input required className="border-b outline-none p-2 border-gray-300 col-span-2" type="email" name="email" id="email" placeholder="Email Address" />
                <input required className="border-b outline-none p-2 border-gray-300 col-span-2" type="password" name="password" id="password" placeholder="Password" />
                <input required className="border-b outline-none p-2 border-gray-300 col-span-2" type="password" name="rpassword" id="rpassword" placeholder="Repeat Password" />
                <button type="submit" className="bg-black text-white rounded-2xl py-3 px-10 col-span-2 w-max justify-self-center  flex gap-3 items-center">{isLoading && <AiOutlineLoading3Quarters className="animate-spin text-xl" />}Sign Up</button>
                <p className="w-fit col-span-2 justify-self-center">already have an accound <Link className="underline" to='/login' onClick={loginButton}>Login</Link></p>
            </Form>
        </div>
    )
}

export default SignupForm