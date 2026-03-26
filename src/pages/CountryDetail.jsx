import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { usePaisesDetalle } from "../hooks/usePaises"
import { TfiLineDotted, TfiBackLeft } from "react-icons/tfi"

const CountryDetail = () => {
  const { name } = useParams()
  const { data, isLoading, error } = usePaisesDetalle(name)
  const navigate = useNavigate()

  if (isLoading) return <p>Cargando...</p>
  if (error) return <p>Error al cargar</p>

  return (
    <div className="min-h-screen flex justify-start items-center bg-emerald-50  flex-col">

      <div className="flex items-center w-full px-8 pb-8">
      <div className="w-2/12"></div>
      <div className="flex justify-start w-1/12">
        <button 
        onClick={() => navigate(-1)} 
        className=" bg-gray-100 p-2 rounded-3xl w-28 h-20 shadow-md hover:bg-blue-100 flex justify-center items-center ml-9">
        <TfiBackLeft className="text-4xl text-emerald-700" />
      </button>
      </div>
        <div className="flex justify-center w-6/12">
          <h1 className="mx-auto text-4xl font-semibold flex flex-row items-center font-serif text-emerald-700 gap-1"><TfiLineDotted /> <TfiLineDotted />Descripcion de pais <TfiLineDotted /><TfiLineDotted /></h1>
        </div>
        <div className="w-3/12"></div>
      </div>

      <div className=" bg-white shadow-lg rounded-4xl flex flex-row justify-start items-center gap-8 w-6xl h-170 p-20">
      <div className="flex flex-col items-center ">
      <h1 className="font-serif text-4xl font-bold mb-4 ">{data.name.common}</h1>
        <img 
        src={data.flags.png} 
        alt={data.name.common} 
            className="w-xl rounded-lg shadow-xl "
        />
      </div>

      <div className="pl-9 font-light text-2xl">
      <p><span className="font-semibold text-gray-700">Capital: </span>{data.capital?.[0]}</p>
      <p><span className="font-semibold text-gray-700">Continente: </span>{data.continents}</p>
      <p><span className="font-semibold text-gray-700">Población: </span>{data.population.toLocaleString()}</p>
      <p><span className="font-semibold text-gray-700">Idiomas: </span>{Object.values(data.languages).join(", ")}</p>
      <p><span className="font-semibold text-gray-700">Región: </span>{data.region}</p>
      <p><span className="font-semibold text-gray-700">Subregión: </span>{data.subregion}</p>
      <p><span className="font-semibold text-gray-700">Área: </span>{data.area.toLocaleString()} km²</p>
      <p><span className="font-semibold text-gray-700">Monedas: </span>{Object.values(data.currencies).map(c => `${c.name} (${c.symbol})`).join(", ")}</p>
      
      </div>
    </div>
    </div>

  )
}

export default CountryDetail
