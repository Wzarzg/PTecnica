import { useParams, useSearchParams } from "react-router-dom"
import { useQueryClient } from "@tanstack/react-query"

const ComentarioDetail = () => {
    const { id } = useParams()
    const [searchParams] = useSearchParams()
    const countryName = searchParams.get("country")

    const queryClient = useQueryClient()

  const comentarios = queryClient.getQueryData(["comentarios", countryName]) || []
  const comentario = comentarios.find(c => c.id === Number(id))

  if (!comentario) return <p>No se encontró el comentario</p>

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold">{comentario.title}</h2>
      <p className="mt-2">{comentario.body}</p>
      <p className="text-sm text-gray-500 mt-4">ID: {comentario.id}</p>
      {comentario.country && (
        <p className="text-sm text-gray-500">País: {comentario.country}</p>
      )}
    </div>
  )
}

export default ComentarioDetail
