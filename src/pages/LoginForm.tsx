import { useEffect, useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Form, redirect, useActionData } from "react-router";
import { Link } from "react-router-dom";



interface singupInterface {
    signupButton?: () => void;
}
const Login = ({signupButton}:singupInterface) => {

    const loginRef = useRef<HTMLDivElement>(null)
    const actionData = useActionData();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(false);
        if(actionData?.data)
        {
            redirect('/')
        }
    },[actionData])
    
    const handleSubmit = () => {
        setIsLoading(true);
    }
    return (
        <div ref={loginRef} className="bg-white overflow-hidden h-dvh flex flex-col gap-7 justify-center items-center rounded-r-4xl">
            <h1 className="text-5xl">Login</h1>
            <button className="border p-3 w-[60%] rounded-2xl cursor-pointer flex justify-center items-center gap-3"><FcGoogle />Login with Google</button>
            <Form onSubmit={handleSubmit} method="post" className="flex flex-col gap-7 w-[100%] justify-center items-center">
                <input required className="outline-0 p-2 w-[60%] border-b-2 border-b-gray-300" type="email" placeholder="Email Address" name='loginEmail' id="loginEmail" />
                <input required className="outline-0 p-2 w-[60%] border-b-2 border-b-gray-300" type="password" placeholder="Password" name="loginPassword" id="loginPassword"/>
                <button className="flex gap-5 items-center rounded-2xl bg-black text-white px-10 py-4" type="submit">{isLoading && <AiOutlineLoading3Quarters className="animate-spin text-xl" />} Login</button>
            </Form>
            <p>Don't have an account <Link to="/signup" onClick={signupButton} className="underline">Sign Up</Link></p>
        
        </div>
    )
}
export default Login;