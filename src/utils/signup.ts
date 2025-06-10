import {supabase} from './supabaseClient' 

const signup = async (email:string, password:string) => {
    const { data, error } = await supabase.auth.signUp({email,password })
    console.log(data);
    console.log(error);
    
    return {data, error: error?.message}
}
export default signup;