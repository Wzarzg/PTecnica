import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { traerComentarios, crearComentario, actualizarComentario, eliminarComentario } from "../api/jsonplaceholderAPI"
import {z} from "zod"

export const useComentarios = (countryName) => {
  const queryClient = useQueryClient()

  const comentariosQuery = useQuery({
    queryKey: ["comentarios", countryName],
    queryFn: () => traerComentarios(countryName),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10
  })

  const crear = useMutation({
    mutationFn: (nuevo) => crearComentario(nuevo, countryName),
    onSuccess: (nuevo) => {
      queryClient.setQueryData(["comentarios", countryName], (old = []) => [nuevo, ...old])
      toast.success("Comentario publicado exitosamente")
    }
  })

  const actualizar = useMutation({
    mutationFn: actualizarComentario,
    onSuccess: (updated) => {
      queryClient.setQueryData(["comentarios", countryName], (old = []) =>
        old.map(c => c.id === updated.id ? { ...c, ...updated } : c)
      )
      toast.success("Comentario actualizado exitosamente")
    }
  })

  const eliminar = useMutation({
    mutationFn: eliminarComentario,
    onSuccess: (id) => {
      queryClient.setQueryData(["comentarios", countryName], (old = []) =>
        old.filter(c => c.id !== id)
      )
      toast.error("Comentario eliminado exitosamente")
    }
  })

  return { comentariosQuery, crear, actualizar, eliminar }
}

export const comentarioSchema = z.object({
  title: z.string().min(1, "El título es obligatorio"),
  body: z.string().min(1, "El comentario no puede estar vacío")
})