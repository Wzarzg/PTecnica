import React from "react"

const Card =({name,capital, flags, continents, population, language})=>{
    return(
        <div className="border p-4 rounded shadow-2xl w-full flex flex-col">
            <div className="flex justify-center h-40 mb-4 shadow-2xl">
                <img src={flags} alt={name} className="w-full h-full object-cover-rounded"></img>
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
