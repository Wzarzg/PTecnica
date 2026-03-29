import { useParams, useSearchParams } from "react-router-dom"
import { useQueryClient } from "@tanstack/react-query"
import { TfiCommentAlt  } from "react-icons/tfi"

const ComentarioDetail = () => {
    const { id } = useParams()
    const [searchParams] = useSearchParams()
    const countryName = searchParams.get("country")

    const queryClient = useQueryClient()

  const comentarios = queryClient.getQueryData(["comentarios", countryName]) || []
  const comentario = comentarios.find(c => c.id === Number(id))

  if (!comentario) return <p>No se encontró el comentario</p>

  return (
    <div className="min-h-screen flex flex-col justify-start items-center">
        <h1 className="flex gap-4 text-3xl pb-6 font-semibold font-serif text-green-700"><TfiCommentAlt></TfiCommentAlt>Detalle de comentario<TfiCommentAlt></TfiCommentAlt></h1>
        <div className="w-1/6"></div>
          <div className="p-4 bg-white rounded-2xl shadow-xl w-4/6">
          <div className="flex gap-5 items-center">
            <p className="text-2xl font-semibold text-blue-900">Título del comentario: </p>
            <p className="text-xl font-semibold  text-gray-700">{comentario.title}</p>
          </div>
          <div className="flex gap-5 items-center mt-1 ml-5">
            <p className="text-xl font-semibold text-blue-900">Contenido: </p>
            <p className="text-md font-semibold  text-gray-700">{comentario.body}</p>
          </div>   
            <p className="text-sm text-gray-500 mt-7">ID: {comentario.id}</p>
            {comentario.country && (
              <p className="text-sm text-gray-500">País: {comentario.country}</p>
            )}
          </div>
        <div className="w-1/6"></div>

      </div>
  )
}

export default ComentarioDetail
