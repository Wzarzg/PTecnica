->Prueba técnica de Frontend - Desarrollador React junior

-Objetivo: Crear una SPA completa con arquitectura React, fusionando dos APIS para probar el consumo, petición, muestra y creación de componentes. Para dicha tarea se utilizaron las herramientas, videos y recursos proporsionados anteriormente.
    ##APIs utilizadas:
        -Principal: RestCountries ("https://restcountries.com/v3.1/")
        -Secundaria: pokeAPI ("https://pokeapi.co/")
        -Para CRUD: JSONPlaceholder ("https://jsonplaceholder.typicode.com/")
    ##Tecnologías utilizadas:
        -React + Vite
        -TailwindCSS
        -Axios
        -React Query
        -Zod
        -Netlify (deploy)
        -react-hook-form
        -react-icons
        -react-router-dom
        -react-toastify
        -zod
        -npm (para la instalación de diversas librerías)

-Funcionalidades principales:
    ##NIVEL 1
        -Diseño de interfaz para muestra de una lista de recursos traída de la API principal, diseñada con TailwindCSS.
        -Creacion de skeletons para simular carga de datos de componentes.
        -Implementación de un campo de búsqueda para mostrar componentes específicos.
    ##NIVEL 2
        -Todo nivel 1
        -Implementar una vista en detalle para cada componente listado (en su propia página utilizando React router para los enlaces).
        -Crear un formulario básico para posteo (utilizando la API de JSONPlaceholder validado con zod)
    ##NIVEL 3
        -Todo nivel 2
        -Implementación de un CRUD completo sobre una entidad (en este caso se utilizó la entidad de comentarios)
        -Implementar notificaciones en creación, edición o eliminación para un manejo más personalizado y visual.
        -Definir por carpetas cada componente (llamada a api, paginas, hooks)
        -Deploy final de API

-Deploy del proyecto (en Netlify).
    Si se desea correr el repositorio, debe seguir los sgtes pasos:
        1. Clonar el repositorio.
        2. Instalar dependencias (npm install)
        3. Generar una build para deploy (npm run build), este comando generará una carpeta "dist" la cual puede ser subida directamente a Netlify para que sea desplegada.
        -OBS: En caso se quiera correr el proyecto de manera local ejecutar: npm run dev, desde terminal para correr el proyecto de forma local sin necesidad de hacer el deploy.

-Deploy de prueba: https://ptecnica-1.netlify.app/

-Comentarios finales: Este proyecto fue bastante interesante y desafiante porque explora todo el proceso de la creación y deploy de una página web básica y sirve como base para poder seguir aprendiendo con proyectos de mayor escala.