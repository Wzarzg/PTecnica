import { useQuery } from "@tanstack/react-query";
import { carga, cargaDetalle } from "../api/countriesAPI";

//reac queary
export const usePaises = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: carga,
  })
}
export const usePaisesDetalle=(name)=>{
  return useQuery({
    queryKey:["country",name],
    queryFn:()=>cargaDetalle(name)
  })
}
