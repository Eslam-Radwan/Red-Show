import { redirect } from "react-router";
import signup from "../utils/signup";

const signupAction = async ({request}) => {
    const formData = await request.formData();
    const firstName = formData.get('first')
    const lastName = formData.get('last')
    const email = formData.get('email')
    const password = formData.get('password')
    const rpassword = formData.get('rpassword')
    if(password !== rpassword)
    {
        console.log("Error: passwords should be identical");
        
        return {error: "passwords should be identical"}
    }
    console.log("firstName", firstName);
    console.log('lastName',lastName);
    console.log('email',email);
    console.log('password',password);
    
    const {data, error} = await signup(email, password)
    
    // setDataCookies(data);

    if(error)
    {
        return {error}
    }
    else
    {
        return redirect('/login')
    }


}

export default signupAction;