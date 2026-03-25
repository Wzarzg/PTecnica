import { useQuery } from "@tanstack/react-query";
import carga from "../api/countriesAPI";

//reac queary
export const usePaises = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: carga,
  })
}
