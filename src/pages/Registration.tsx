import { useActionData } from "react-router";
import MovieGrid from "./components/MovieGrid";
import { useCallback, useContext, useEffect, useRef } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import RegistrationContext, { type RegistrationContextType } from "../context/registrationContext";
import ErrorContext, { type ErrorContextType } from "../context/errorContext";


const Registration = () => {
    const {setErrorMessage, setError} = useContext(ErrorContext) as ErrorContextType
    const actionData = useActionData();
    const signupRef = useRef<HTMLDivElement>(null)
    const loginRef = useRef<HTMLDivElement>(null)

    const {isLogin, setIsLogin} = useContext(RegistrationContext) as RegistrationContextType


    const makeErrorModal = useCallback((errorMessage:string) => {
        setError(true)
        setErrorMessage(errorMessage)
        setTimeout(() => {setError(false) }, 2000)},
        [setError, setErrorMessage] )


    useEffect(() => {
        if (actionData?.error) {
            makeErrorModal(actionData.error)
        }
    }, [actionData, makeErrorModal])

    
    const loginButton = () => {
        setIsLogin(true);
    }

    const signupButton = () => {
       setIsLogin(false);
    }

    useEffect(() => {
        if(isLogin)
        {
            (signupRef?.current as HTMLDivElement).style.width = '0px';
            (loginRef?.current as HTMLDivElement).style.width = '1200px';
        }
        else {
            (signupRef?.current as HTMLDivElement).style.width = '1200px';
            (loginRef?.current as HTMLDivElement).style.width = '0px';
        }
    },[isLogin])

    return (
        <div className="flex bg-black">
            <div ref={loginRef} className={`transition-all ease-out duration-200 w-[0px]`}>
                <LoginForm signupButton={signupButton}/>
            </div>
            <div className="flex-1/2 h-dvh relative overflow-hidden">
                <span className="absolute z-1 w-full h-dvh bg-gradient-to-b  from-black from-5% via-transparent to-black to-95%"></span>
                <div className="-rotate-[20deg] w-[1000px] scale-[150%]"><MovieGrid/></div>
            </div>
            <div ref={signupRef} className={` transition-all duration-200 ease-out overflow-hidden w-[0px] flex gap-4 flex-col h-dvh rounded-l-4xl bg-white justify-center items-center `}>
                <SignupForm loginButton={loginButton}/>
            </div>
        </div>


    )
}

export default Registration;