import { useParams } from "react-router-dom";
import { usePaisesDetalle } from "../hooks/reactQueary";


const CountryDetail = () => {
  const { name } = useParams();
  const { data, isLoading, error } = usePaisesDetalle(name)

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{data.name.common}</h1>
      <img src={data.flags.png} alt={`Bandera de ${data.name.common}`} />
      <p>Capital: {data.capital?.[0]}</p>
      <p>Continente: {data.continents}</p>
      <p>Población: {data.population.toLocaleString()}</p>
      <p>Idiomas: {Object.values(data.languages).join(", ")}</p>
    </div>
  );
};

export default CountryDetail;
