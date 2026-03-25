import React from "react"

const Card =({name,capital, flags, continents, population, language})=>{
    return(
        <div className="border p-4 rounded-2xl border-gray-200 shadow-lg w-full flex flex-col bg-cyan-50">
            <div className="flex justify-center h-40 mb-4 shadow-xs">
                <img src={flags} alt={name} className="w-full h-full rounded-md object-cover-rounded"></img>
            </div>
            <p className="font-bold text-2xl">{name}</p>
            <p className="font-semibold text-lg">Capital: {capital}</p>
            <p>Continente: {continents}</p>
            <p>Poblacion: {population} </p>
            <p>Idiomas: {language}</p>
        </div>
    )
}

export default Card
