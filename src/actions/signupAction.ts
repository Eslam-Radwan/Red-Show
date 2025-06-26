import signup from "../utils/signup";
import type { ActionFunction } from "react-router";
import axios from "axios";
const signupAction:ActionFunction = async ({request}) => {
    const formData = await request.formData();
    const firstName = formData.get('first') as string
    const lastName = formData.get('last') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const rpassword = formData.get('rpassword') as string
    firstName.trim()
    lastName.trim()
    email.trim()
    password.trim()
    rpassword.trim()

    if(password !== rpassword)
    {        
        return {error: "passwords should be identical"}
    }

    try {

        const data = await signup(firstName,lastName,email, password) 
        console.log(data);
        
        return {data}
    }
    catch (error)
    {
        console.log('Found an error', error)
        if(axios.isAxiosError(error))
            return {error: error.message}
        else 
            return {error: "Unknown error"}

    }
    
}

export default signupAction;