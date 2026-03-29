import Skeleton from '../components/Skeleton'
import Card from '../components/Card'
import { useState } from 'react'
import { usePaises } from '../hooks/usePaises'

function App() {
  //pedida
  const { data, isLoading, error } = usePaises()
  //filtrado 
  const [filtrado, setFiltrado] = useState("")
  //paginacion
  const [pagi, setPagi] = useState(0)
  //cant de cardss por pagina
  const pageSize = 6

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl w-full px-6 mx-auto pt-35">
        {Array.from({ length: pageSize }).map((_, i) => (
          <Skeleton key={i} />
        ))}
      </div>
    )
  }
  if (error) return <p>Error en la carga</p>

  //filtrado
  const filtradoP = data.filter((country) =>
    country.name.common.toLowerCase().includes(filtrado.toLowerCase())
  )

  //paises en indice actuales
  const start = pagi * pageSize
  const end = start + pageSize
  const currentPage = filtradoP.slice(start, end)
  //cant total de paginas a mostrar luego de filtrado
  const totalPages = Math.ceil(filtradoP.length / pageSize)

  // Calcular rango de páginas visibles (máx 5 botones)
  const startPage = Math.max(0, pagi - 2)
  const endPage = Math.min(totalPages - 1, pagi + 2)
  const visiblePages = []
  for (let i = startPage; i <= endPage; i++) {
    visiblePages.push(i)
  }

  return (
    <div className='flex flex-col items-center'>
      {/*busuqeda*/}
      <div className="w-full max-w-120 mb-2">
        <input 
          type="text" 
          placeholder="Buscar País" 
          value={filtrado} 
          onChange={(e) => { setFiltrado(e.target.value); setPagi(0) }} 
          className="w-full bg-gray-100 px-3.5 py-1 border border-gray-300 rounded-full"
        />
      </div>

      {/*creacion de cards*/}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl w-full px-5'>
        {currentPage.map((country) => (
          <Card
            key={country.name.common}
            name={country.name.common}
            capital={country.capital?.[0]}
            flags={country.flags.png}
            continents={country.continents}
            population={country.population.toLocaleString()}
            language={Object.values(country.languages).slice(0, 3).join(", ")}
          />
        ))}
      </div>

      {/*paginacion*/}
      <div className="flex gap-2 mt-3 h-9">
        <button 
          disabled={pagi === 0} 
          onClick={() => setPagi(pagi - 1)} 
          className="px-4 bg-gray-200 rounded hover:bg-green-100 disabled:opacity-50">Anterior</button>
        {visiblePages.map(i => (
          <button 
            key={i} 
            onClick={() => setPagi(i)} 
            className={`px-3 rounded ${i === pagi ? "bg-emerald-200" : "bg-gray-200 hover:bg-green-100"}`}>{i + 1}</button>
        ))}
        <button 
          disabled={pagi === totalPages - 1} 
          onClick={() => setPagi(pagi + 1)} 
          className="px-4  bg-gray-200 rounded hover:bg-green-100 disabled:opacity-50">Siguiente</button>
      </div>
    </div>
    
  )
}

export default App
