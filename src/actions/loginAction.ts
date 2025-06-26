import { redirect, type ActionFunction } from "react-router";
import login from "../utils/login";
import axios from "axios";
const loginAction:ActionFunction = async ({request}) => {
    const formData = await request.formData();
    
    const email = formData.get('loginEmail') as string
    const password = formData.get('loginPassword') as string

    email.trim()
    password.trim()
    
    try {

        const data = await login(email, password)
        console.log(data);
        
        // save data to cookies
        return redirect('/')
    }
    catch (error)
    {
         if(axios.isAxiosError(error))
         {
             console.log(error.message);
             return {error: error.message}
         }
         else
         {
            return {error: "Unknown error"}
         }
    }
    
}

export default loginAction;