import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const signup = async (First_Name:string, Last_Name:string, Email:string, Password:string) => {
    try {
        const {data} = await axios.post(`${API_BASE_URL}/api/auth/signup`, {
            First_Name,
            Last_Name,
            Email,
            Password,
        });
        
        return {data, error: null};
    }
    catch(error)
    {
        if(axios.isAxiosError(error))
        return {data:null, error: error.message}
    }
}

export default signup;