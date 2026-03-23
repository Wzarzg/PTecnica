import React from "react"

const Skeleton =()=>{
    return(
        <div className="border p-4 rounded shadow-2xl w-[60%] max-w-[25%] ">
            <div className="flex justify-center h-40 mb-4 shadow-2xl">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"alt="Cargando..."/>
            </div>
            <div className="h-4 bg-gray-300 rounded-full mb-3 animate-pulse"></div>
            <div className="h-3 bg-gray-300 rounded-full mb-3 animate-pulse"></div>
            <div className="h-2 bg-gray-300 rounded-full mb-3 animate-pulse"></div>
            <div className="h-2 bg-gray-300 rounded-full mb-3 animate-pulse"></div>
            <div className="h-2 bg-gray-300 rounded-full mb-3 animate-pulse"></div>

        </div>
    )
}

export default Skeleton
