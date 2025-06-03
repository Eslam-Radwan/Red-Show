import axios from "axios"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export const fetchPopularMovies = async() => {
    const res = await axios.get(`${API_BASE_URL}/movie/popular`, { headers:{
        "Authorization": `Bearer ${API_TOKEN}`,
        "Content-Type": 'application/json'
    }})    
    console.log(res.data.results);
    
    return res.data.results
}