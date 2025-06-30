import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const popularMovies = async (count: number) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/api/movies/popular?count=${count}`)
        console.log(data)
        return data.results
    } catch (error) {
        console.error('Error fetching popular movies:', error)
        return []
    }
}


export const topMovies = async (count: number) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/api/movies/top_rated?count=${count}`)
        console.log(data)
        return data.results
    } catch (error) {
        console.error('Error fetching top movies:', error)
        return []
    }
}


export const movieDetail = async (id: string) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/api/movies/${id}`)
        return data
    } catch (error) {
        console.error(`Error fetching movie detail for ID ${id}:`, error)
        return null
    }
}

export const moviesGenres = async () => {
    try {
        const {data} = await axios.get(`${API_BASE_URL}/api/movies/genres`)
        return data;

    }
    catch (error)
    {
        console.error('Error whilte fetching movies genres', error);
        return null;

    }
}