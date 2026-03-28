import { useQuery } from "@tanstack/react-query"
import { filtradoPoke } from "../api/pokeAPI"

export const usePokemones = (countryName) => {
  return useQuery({
    queryKey: ["pokemones", countryName],
    queryFn: () => filtradoPoke(countryName),
    enabled: !!countryName
  })
}
