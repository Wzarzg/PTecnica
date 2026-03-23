import '../App.css'
import Skeleton from '../components/Skeleton'
import Card from '../components/Card'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'


const carga = async () => {
  await new Promise(resolve => setTimeout(resolve,2000))
  const res = await axios.get(
    "https://restcountries.com/v3.1/all?fields=name,capital,flags,continents,population,languages"
  )
  return res.data
}

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["countries"],
    queryFn: carga,
  })

  //hook filtrado
  const [filtrado, setFiltrado] = useState("")
  //hook pagi
  const[limit, setLimit] = useState()

  if(isLoading){
    return (
      <div className="flex flex-wrap gap-4 justify-center">
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
      
      <div className="w-full max-w-120 mb-7">
        <input type="text" placeholder="Buscar Pais" value={filtrado} onChange={(e) => setFiltrado(e.target.value)}
        className="w-full bg-gray-100 px-3.5 py-2 border border-gray-300 rounded-full"
        />
      </div>
      
      <div className="flex gap-5 mb-6">
        <button
          onClick={() => setLimit(3)}
          className="px-4 py-1 bg-gray-200 text-gray rounded-4xl hover:bg-green-100"
        >Mostrar 3</button>
        <button
          onClick={() => setLimit(6)}
          className="px-4 py-2 bg-gray-200 text-gray rounded-4xl hover:bg-green-100"
        >Mostrar 6</button>
        <button
          onClick={() => setLimit(12)}
          className="px-4 py-2 bg-gray-200 text-gray rounded-4xl hover:bg-green-100"
        >Mostrar 12</button>
        <button
          onClick={() => setLimit()}
          className="px-4 py-2 bg-gray-200 text-gray rounded-4xl hover:bg-green-100"
        >Mostrar Todos</button>

      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl w-full px-6'>
        {filtradoP.slice(0,limit).map((country)=>( //slice
          <Card
            key={country.name.common}
            name={country.name.common}
            capital={country.capital?.[0]}
            flags={country.flags.png}
            continents={country.continents}
            population={country.population}
            language={Object.values(country.languages || {}).slice(0, 3).join(", ")}
          />
        ))}
      </div>
    </div>
  )
}

export default App
