import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { crearP, traerP } from "../api/jsonplaceholderAPI"

export const usePosts = () => {
  const queryClient = useQueryClient()

  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: traerP
  })

  const crearPosts= useMutation({
    mutationFn: crearP,
    onSuccess:(npost)=>{
      queryClient.setQueryData(["posts"], (dtactual = []) => [npost, ...dtactual])
      toast.success("Post realizado exitosamente")
    }
  })
  return { postsQuery, crearPosts }
}
