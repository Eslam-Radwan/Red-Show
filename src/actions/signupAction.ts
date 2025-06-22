import { redirect } from "react-router";
import signup from "../utils/signup";
import type { ActionFunction } from "react-router";
const signupAction:ActionFunction = async ({request}) => {
    const formData = await request.formData();
    const firstName = formData.get('first') as string
    const lastName = formData.get('last') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const rpassword = formData.get('rpassword') as string
    if(password !== rpassword)
    {
        console.log("Error: passwords should be identical");
        
        return {error: "passwords should be identical"}
    }
    console.log("firstName", firstName);
    console.log('lastName',lastName);
    console.log('email',email);
    console.log('password',password);
    
    const {data, error} = await signup(firstName,lastName,email, password)
    
    // setDataCookies(data);
    if(error)
    {
        console.log('Found an error', error)
        return {error}
    }
    else if(data)
    {
        return redirect('/login')
    }

}

export default signupAction;