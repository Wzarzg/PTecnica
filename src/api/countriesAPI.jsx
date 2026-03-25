import axios from "axios"

const carga = async () => {
  await new Promise(resolve => setTimeout(resolve,3000))
  const res = await axios.get(
    "https://restcountries.com/v3.1/all?fields=name,capital,flags,continents,population,languages"
  )
  return res.data
}
export default carga