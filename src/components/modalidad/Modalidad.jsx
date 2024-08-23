import Image from "next/image"

const Modalidad = () => {
    return (
      <div>
          <div className='text-center justify-items-center mx-auto mt-16 mb-12'>
          <h1 className='text-3xl text-sky-900 font-bold mb-10'>Que Ofrecemos?</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 text-center mx-auto'>
          <div class="text center mx-auto w-80 p-4 bg-white rounded-lg shadow-md ">
            <Image src='/vivo.png' alt='' width={260} height={260}/>
                <div class="p-4">
                <h2 class="text-xl  font-semibold">En vivo y en linea</h2>
                <p class="text-gray-600 text-justify">
                Nuestras clases online en Zoom son lecciones en vivo de 60 minutos con profesores cualificados.
                </p>
          </div>
      </div>
      <div class="text center mx-auto w-80 p-4 bg-white rounded-lg shadow-md ">
            <Image src='/online.png' alt='' width={300} height={300}/>
                <div class="p-4">
                <h2 class="text-xl  font-semibold">Practicas en vivo</h2>
                <p class="text-gray-600 text-justify">
                Nuestras clases en grupos son de hasta 5, por lo que siempre dispondrás de tiempo para hablar.
                </p>
          </div>
      </div>
      <div class="text center mx-auto w-80 h-96 p-4 bg-white rounded-lg shadow-md ">
           <Image src='/principi.png' alt='' width={300} height={300} className="mx-auto"/>
                <div class="p-4">
                <h2 class="text-xl  font-semibold">Principiante a avanzado</h2>
                <p class="text-gray-600 text-justify">
                Con clases disponibles de A1 a C1, puedes elegir el nivel que mejor se adapte a tus necesidades.
                </p>
          </div>
      </div>
      </div>
      </div>
      </div>
    )
  }
  
  export default Modalidad