
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const login = async (Email:string, Password: string) => {
    const res = await axios.post(`${API_BASE_URL}/api/auth/login`, {
        Email, Password
    })
    console.log(res);
        
    return res.data

}

export default login;