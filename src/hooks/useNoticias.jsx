import { useQuery } from "@tanstack/react-query"
import { carganoticias } from "../api/newsAPI"

export const useNoticias = (countryCode) => {
  return useQuery({
    queryKey: ["noticias", countryCode],
    queryFn: ()=> carganoticias(countryCode)
    })
}
