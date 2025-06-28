import signup from "../utils/signup";
import type { ActionFunction } from "react-router";
import axios from "axios";
const signupAction:ActionFunction = async ({request}) => {
    const formData = await request.formData();
    const firstName = (formData.get('first') as string).trim()
    const lastName = (formData.get('last') as string).trim()
    const email = (formData.get('email') as string).trim()
    const password = (formData.get('password') as string).trim()
    const rpassword = (formData.get('rpassword') as string).trim()

    if(firstName && lastName && email && password && rpassword)
    {

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
    else 
    {
        return {error: 'all fields must be not empty'}
    }
    
}

export default signupAction;