import axios from "axios"

const apikey = "3b1b8eb6c8d748d691951a3c37bc59bb"

export const carganoticias = async (countryCode) => {
    const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${apikey}`)
    return res.data.articles
}
