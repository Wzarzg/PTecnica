import axios from "axios"

export const traerP = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  return res.data
}

export const crearP = async (newPost) => {
  const res = await axios.post("https://jsonplaceholder.typicode.com/posts", newPost)
  return res.data
}
