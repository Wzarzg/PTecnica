import Skeleton from '../components/Skeleton'
import Card from '../components/Card'
import { useState } from 'react'
import { usePaises } from '../hooks/reactQueary'

function App() {
  //pedida
  const { data, isLoading, error } = usePaises()
  //hook filtrado
  const [filtrado, setFiltrado] = useState("")
  //hook pagi
  const[pag, setPag] = useState()

  if(isLoading){
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl w-full px-6 mx-auto pt-35">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} />
        ))}
      </div>
    )
  }
  if (error) return <p>Error en la cargaaa</p>

  //filtrado
  const filtradoP = data.filter((country) =>
    country.name.common.toLowerCase().includes(filtrado.toLowerCase())
  )

  return (
    <div className='flex flex-col items-center'>
      {/*barra de busqueda/filtrado*/}
      <div className="w-full max-w-120 mb-7">
        <input type="text" placeholder="Buscar Pais" value={filtrado} onChange={(e) => setFiltrado(e.target.value)}
        className="w-full bg-gray-100 px-3.5 py-2 border border-gray-300 rounded-full"
        />
      </div>
      {/*intento de paginacion?*/}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        <button
          onClick={() => setPag(3)}
          className="px-4 py-1 bg-gray-200 text-gray rounded-4xl hover:bg-green-100"
        >Mostrar 3</button>
        <button
          onClick={() => setPag(6)}
          className="px-4 py-2 bg-gray-200 text-gray rounded-4xl hover:bg-green-100"
        >Mostrar 6</button>
        <button
          onClick={() => setPag(12)}
          className="px-4 py-2 bg-gray-200 text-gray rounded-4xl hover:bg-green-100"
        >Mostrar 12</button>
        <button
          onClick={() => setPag()}
          className="px-4 py-2 bg-gray-200 text-gray rounded-4xl hover:bg-green-100"
        >Mostrar Todo</button>
      </div>
      {/*creacion de cards*/}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl w-full px-6'>
        {filtradoP.slice(0,pag).map((country)=>( 
          <Card
            key={country.name.common}
            name={country.name.common}
            capital={country.capital?.[0]}
            flags={country.flags.png}
            continents={country.continents}
            population={country.population}
            language={Object.values(country.languages).slice(0, 3).join(", ")}
          />
        ))}
      </div>
    </div>
  )
}

export default App
