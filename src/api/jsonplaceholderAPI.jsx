import axios from "axios"

export const traerP = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  return res.data
}

export const crearP = async (newPost) => {
  const res = await axios.post("https://jsonplaceholder.typicode.com/posts", newPost)
  return res.data
}

//para comentarios -CRUD

export const traerComentarios = async (countryName) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  return res.data.filter(p => p.title.includes(countryName))
}

export const crearComentario = async (nuevo, countryName) => {
  const res = await axios.post("https://jsonplaceholder.typicode.com/posts", nuevo)
  return { ...res.data, id: Date.now(), country: countryName }
}

export const actualizarComentario = async ({ id, ...update }) => {
  return { id, ...update }
}

export const eliminarComentario = async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return id
}

