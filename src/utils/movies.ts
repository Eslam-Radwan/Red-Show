import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const popularMovies = async (count: number) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/api/movies/popular?count=${count}`)
        console.log(data)
        return data.results
    } catch (error) {
        console.error('Error fetching popular movies:', error)
        throw error
    }
}


export const topMovies = async (count: number) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/api/movies/top_rated?count=${count}`)
        console.log(data)
        return data.results
    } catch (error) {
        console.error('Error fetching top movies:', error)
        throw error
    }
}


export const movieDetail = async (id: string) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/api/movies/${id}`)
        return data
    } catch (error) {
        console.error(`Error fetching movie detail for ID ${id}:`, error)
        throw error
    }
}

export const moviesGenres = async () => {
    try {
        const {data} = await axios.get(`${API_BASE_URL}/api/movies/genres`)
        return data;

    }
    catch (error)
    {
        console.error('Error while fetching movies genres', error);
        throw error;

    }
}

export const moviesWithGenre = async (genreId: number, count: number) => {
    try {
        const {data} = await axios.get(`${API_BASE_URL}/api/movies/discover?genreId=${genreId}&count=${count}`)
        return data.results;
    }
    catch(error)
    {
        console.error('Error while fetching movies with genres', error);
        throw error;
    }
}