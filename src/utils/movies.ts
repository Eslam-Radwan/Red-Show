import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const popularMovies = async (count:number) => {
    const {data} = await axios.get(`${API_BASE_URL}/api/movies/popular?count=${count}`)
        console.log(data);

    return data.results
}
export const popularTV = async (count:number) => {
    const {data} = await axios.get(`${API_BASE_URL}/api/shows/popular?count=${count}`)
    console.log(data);
    
    return data.results
}
export const topMovies = async (count:number) => {
    const {data} = await axios.get(`${API_BASE_URL}/api/movies/top_rated?count=${count}`)
        console.log(data);

    return data.results
}
export const topTV = async (count:number) => {
    const {data} = await axios.get(`${API_BASE_URL}/api/shows/top_rated?count=${count}`)
        console.log(data);

    return data.results
}

 