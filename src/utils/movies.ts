import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const popularMovies = async () => {
    const {data} = await axios.get(`${API_BASE_URL}/api/movies/popular`)
    return data.results
}

 