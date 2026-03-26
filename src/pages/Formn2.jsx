import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { SlPencil } from "react-icons/sl";
import { ToastContainer } from "react-toastify"
import { usePosts } from "../hooks/usePosts";

const schema = z.object({
  title: z.string().min(1, "El título no puede estar vacío"),
  body: z.string().min(1, "El cuerpo del post no puede estar vacío"),
})

const CPosts = () => {
  const { postsQuery, crearPosts } = usePosts()

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = (post) => {
    crearPosts.mutate(post)
  }

  return (
    <div className="flex flex-col p-8 gap-8">
      {/*from*/}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-6 bg-white shadow-md rounded-lg w-1/2 mx-auto">
        <h2 className="text-2xl font-bold mb-4 flex gap-4 text-gray-700">Crear Post <SlPencil /></h2>
        
        <input type="text" placeholder="Título" {...register("title")} className="border p-2 rounded border-gray-300 shadow-md"/>
        { errors.title && <p className="text-red-500">{errors.title.message}</p>}
        <textarea placeholder="Contenido" {...register("body")} className="border p-2 rounded border-gray-300 shadow-md" />
        {errors.body && <p className="text-red-500">{errors.body.message}</p>}
        
        <button type="submit" className="bg-gray-200 font-semibold p-2 rounded hover:bg-green-200">Crear</button>
      </form>

      {/*posts*/}
      <div className="grid gap-4 ">
        {postsQuery.data?.slice(0, 7).map(post => (
          <div key={post.id} className="bg-white shadow-md rounded-md p-3 h-19 ">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className=" font-light pl-4">{post.body}</p>
          </div>
        ))}
      </div>

        <ToastContainer position="top-right" autoClose={2000} />
    </div>
  )

}

export default CPosts
