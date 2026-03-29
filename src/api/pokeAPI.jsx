import axios from "axios"

export const filtradoPoke = async (countryName) => {
  const letra = countryName[0].toLowerCase()
  const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
  const filtrados = res.data.results.filter(p => p.name.startsWith(letra))
  const seleccionados = filtrados.slice(0, 5)

  const detalles = await Promise.all(
    seleccionados.map(p => axios.get(p.url).then(r => r.data))
  )

  return detalles
}
