import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const popularTV = async (count: number) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/api/shows/popular?count=${count}`)
        console.log(data)
        return data.results
    } catch (error) {
        console.error('Error fetching popular TV shows:', error)
        return []
    }
}
export const topTV = async (count: number) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/api/shows/top_rated?count=${count}`)
        console.log(data)
        return data.results
    } catch (error) {
        console.error('Error fetching top TV shows:', error)
        return []
    }
}

export const tvDetail = async (id: string) => {
        try {
        const { data } = await axios.get(`${API_BASE_URL}/api/shows/${id}`)
        console.log(data)
        return data
    } catch (error) {
        console.error('Error fetching top TV shows:', error)
        return null
    }
}
