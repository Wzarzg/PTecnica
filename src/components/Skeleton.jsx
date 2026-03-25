const Skeleton =()=>{
    return(
        <div className="border p-4 rounded-2xl border-gray-200 shadow-lg bg-gray-50 ">
            <div className="flex justify-center h-40 mb-4 shadow-xs ">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" className="w-full h-full rounded-md object-cover-rounded" alt="Cargando..."/>
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
