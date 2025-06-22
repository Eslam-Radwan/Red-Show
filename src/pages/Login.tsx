import { Form } from "react-router";
import { Link } from "react-router-dom";

const Login = ({setIsLogin}:{setIsLogin: (value:boolean) => void}) => {
    return (
        <div className="bg-white h-dvh flex flex-col gap-7 justify-center items-center rounded-r-4xl">
            <h1 className="text-5xl">Login</h1>
            <Form className="flex flex-col gap-7 justify-center items-center">
                <input className="p-2 border-b-2 border-b-gray-300" type="text" placeholder="Email Address" name='email' id="email" />
                <input className="p-2 border-b-2 border-b-gray-300" type="text" placeholder="Password" name="password" id="passowrd"/>
                <button className="rounded-2xl bg-black text-white px-10 py-4" type="submit">Login</button>
            </Form>
            <p>Don't have an account <Link to="/" onClick={() => setIsLogin(false)} className="underline">Sign Up</Link></p>
        
        </div>
    )
}
export default Login;