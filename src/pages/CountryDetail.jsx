import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { usePaisesDetalle } from "../hooks/usePaises"
import { TfiLineDotted, TfiBackLeft, TfiCommentAlt  } from "react-icons/tfi"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useComentarios } from "../hooks/useComentr"
import { comentarioSchema } from "../hooks/useComentr"
import { useState } from "react"
import { ToastContainer } from "react-toastify"
import { usePokemones } from "../hooks/usePokemones"


const CountryDetail = () => {
  const { name } = useParams()
  const { data, isLoading, error } = usePaisesDetalle(name)
  const [editando, setEditando] = useState(null) // guarda el id del comentario que se edita
  const navigate = useNavigate()

  const { data: pokemones, isLoading: pokemonesLoading } = usePokemones(data?.name.common)

  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: zodResolver(comentarioSchema),
    defaultValues:{
      title:"",
      body:""
    }
  })
  const { comentariosQuery, crear,actualizar, eliminar } = useComentarios(data?.name.common)

  const onSubmit = (comentario) => {
    if(editando){
      actualizar.mutate({ id: editando, ...comentario })
      setEditando(null)
    } else{
      crear.mutate({ ...comentario, title: `${data?.name.common} - ${comentario.title}` })
    }
  }

 const empezarEdicion = (comentario) => {
  setEditando(comentario.id)
  setValue("title", comentario.title)
  setValue("body", comentario.body)
}

  if (isLoading) return <p>Cargandoooo</p>
  if (error) return <p>Error al cargar la data</p>

  return (
    <div className="min-h-screen flex justify-start items-start mt-12 bg-emerald-50">
      
        <div className=" w-1/12"></div>
        <div className=" w-7/12">
        {/*titulo y boton*/}
          <div className="flex items-center w-full pb-2">
          <div className="flex justify-start w-2/16">
            <button 
            onClick={() => navigate(-1)} 
            className=" bg-gray-100 p-2 rounded-3xl w-3/4 h-15 shadow-md hover:bg-green-100 flex justify-center items-center">
            <TfiBackLeft className="text-4xl text-emerald-700" />
          </button>
          </div>
            <div className="flex justify-center w-11/16">
              <h1 className="mx-auto text-3xl font-semibold flex flex-row items-center font-serif text-emerald-700 gap-1"><TfiLineDotted /> <TfiLineDotted />Descripción de país <TfiLineDotted /><TfiLineDotted /></h1>
            </div>
            <div className="w-3/16"></div>
          </div>

          {/*Contenedor blanco*/}
          <div className=" bg-white shadow-lg rounded-4xl flex flex-row justify-center items-center gap-8 w-full h-full p-10">
          
          {/*Imagen pais y pokemones*/ }
            {/*imagen pais */}  
            <div className="flex flex-col items-center w-1/2">
            <h1 className="font-serif text-4xl font-bold mb-4 ">{data.name.common}</h1>
              <img 
              src={data.flags.png} 
              alt={data.name.common} 
                  className="w-md rounded-lg shadow-xl "/>
              {/*imagenes pokemones */} 
                  <div className="mt-6">
                    <h2 className="text-xl font-bold text-emerald-700">Pokemones que empiezan con la letra... {data.name.common[0]}</h2>
                    {pokemonesLoading && <p>Cargando pokemones...</p>}
                    {pokemones?.length === 0 && <p>No se encontraron pokemones con esa letra.</p>}
                    <div className="flex gap-4 mt-2">
                      {pokemones?.map(p => (
                        <div key={p.id} className="flex flex-col items-center">
                          <img src={p.sprites.front_default} alt={p.name} className="w-20 h-20"/>
                          <p className="capitalize font-light">{p.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>  
            </div>
            {/*Informacion detalle de pais */}
            <div className="w-1/2">
                <div className="pl-9 font-light text-xl">
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
        </div>
        
      <div className=" w-3.5/12 ml-4">
      {/* form comentario*/}
      <h3 className="font-semibold text-2xl text-blue-800 pb-2 ml-5 flex gap-5 items-center">Comentarios! <TfiCommentAlt /></h3>  
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 rounded shadow-md">
        <input {...register("title")} placeholder="Título..." className="border p-2 rounded w-full mb-2"/>
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        <textarea {...register("body")} placeholder="Escribe tu comentario..." className="border p-2 rounded w-full mt-1"/>
        {errors.body && <p className="text-red-500">{errors.body.message}</p>}

        <button type="submit" className="bg-gray-200 font-semibold p-2 rounded-xl hover:bg-green-200">
          {editando ? "Guardar cambios" : "Agregar comentario"}
        </button>
      </form>

      {/*listado comentario*/}
      <div className="grid gap-2 mt-5">
        {comentariosQuery.data?.map(c => (
          <div key={c.id} className=" shadow-md rounded-md bg-mist-50 p-2">
            <h3 className="font-bold">{c.title}</h3>
            <p>{c.body}</p>
            <button onClick={() => eliminar.mutate(c.id)} className="text-red-500">Eliminar</button>
            <button onClick={() => empezarEdicion(c)} className="text-blue-500 ml-4">Actualizar</button>
            
            <button 
              onClick={() => navigate(`/comentarios/${c.id}?country=${data.name.common}`)} 
              className="text-green-600 ml-4">
              Ver detalle
            </button>
          </div>
        ))}
        </div>
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
      <div className="w-0.5/12"></div>

    </div>
  )
}

export default CountryDetail
