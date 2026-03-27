import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { usePaisesDetalle } from "../hooks/usePaises"
import { TfiLineDotted, TfiBackLeft } from "react-icons/tfi"
import { useNoticias } from "../hooks/useNoticias"


const CountryDetail = () => {
  const { name } = useParams()
  const { data, isLoading, error } = usePaisesDetalle(name)
  const navigate = useNavigate()

  const { data: noticias = [], isLoading: noticiasLoading } = useNoticias(data?.cca2)

  if (isLoading) return <p>Cargandoooo</p>
  if (error) return <p>Error al cargar la data</p>

  return (
    <div className="min-h-screen flex justify-start items-center bg-emerald-50  flex-col">
      {/*titulo y boton*/ }
      <div className="flex items-center w-full px-8 pb-8">
      <div className="w-2/12"></div>
      <div className="flex justify-start w-1/12">
        <button 
        onClick={() => navigate(-1)} 
        className=" bg-gray-100 p-2 rounded-3xl w-28 h-20 shadow-md hover:bg-green-100 flex justify-center items-center ml-9">
        <TfiBackLeft className="text-4xl text-emerald-700" />
      </button>
      </div>
        <div className="flex justify-center w-6/12">
          <h1 className="mx-auto text-4xl font-semibold flex flex-row items-center font-serif text-emerald-700 gap-1"><TfiLineDotted /> <TfiLineDotted />Descripción de país <TfiLineDotted /><TfiLineDotted /></h1>
        </div>
        <div className="w-3/12"></div>
      </div>

      <div className=" bg-white shadow-lg rounded-4xl flex flex-row justify-start items-center gap-8 w-6xl h-170 p-20">
      
      {/*Imagen pais y de pokemones*/ }
      
      <div className="flex flex-col items-center ">
      <h1 className="font-serif text-4xl font-bold mb-4 ">{data.name.common}</h1>
        <img 
        src={data.flags.png} 
        alt={data.name.common} 
            className="w-xl rounded-lg shadow-xl "
        />

      <p>asdasdas</p>
      <p>asdasdas</p>
      <p>asdasdas</p>
      <p>asdasdas</p>
      <p>asdasdas</p>
      <p>asdasdas</p>
      <p>asdasdas</p>
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
      
      <div className="mt-3 w-full bg-white shadow-lg rounded-xl p-2">
        <h2 className="text-2xl font-bold text-emerald-700 ">Noticias de {data.name.common}</h2>
        {noticiasLoading && <p className="text-sm mt-5">Cargando noticias...</p>}
        {noticias.length === 0 && <p className="text-sm mt-5">No hay noticias disponibles.</p>}
        <ul className="space-y-2">
            {noticias.slice(0, 2).map((noti, i) => (
              <li key={i} className="border-b border-green-600 pb-2">
                <div className="flex">
                  <p className="text-lg font-semibold text-gray-800">{noti.title}</p>
                  <p className="text-lg font-semibold text-red-800 ml-8">{noti.source.name}</p>
                </div>
                <p className="text-gray-700 text-sm mt-1">{noti.description}</p>
                <p className="text-green-800 text-sm mt-2">Publicado el: {noti.publishedAt}</p>
              </li>
            ))}
          </ul>
      </div>
    
      </div>
    </div>
    </div>

  )
}

export default CountryDetail
