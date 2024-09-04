import Image from "next/image"

const Idiomas = () => {
    return (
      <div className='text-center mx-auto mt-10 md:mt-20 mb-20 px-4 md:px-8'>
        <h1 className='text-3xl text-sky-900 font-bold mb-4'>Curso de Idiomas</h1>
         <h2 className="text-2xl text-sky-950 font-bold">...Que el idioma no sea una barrera en tu carrera.</h2>
         <h2 className="text-2xl text-sky-950 font-bold">Aprende con nuestros profesores nativos</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div data-aos="fade-right" className='text-center mx-auto w-full md:w-3/4 p-4 bg-white rounded-lg shadow-md'>
            <Image src='/brflag.png' alt='Bandera de Brasil' width={200} height={200} className="mx-auto"/>
            <div className='p-2'>
              <h2 className='text-xl text-sky-900 font-semibold mb-2'>Portugués de Brasil</h2>
              <p className='text-gray-600 text-xl text-justify'>
                Aprender portugués facilita la comunicación con más de 200 millones de personas y es especialmente útil en negocios internacionales, 
                dado el creciente impacto económico de Brasil. Además, el portugués es similar al español, lo que puede hacer el aprendizaje más accesible 
                para hispanohablantes.
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className='text-center mx-auto w-full md:w-3/4 p-4 bg-white rounded-lg shadow-md'>
            <Image src='/usaflag.png' alt='Bandera de Estados Unidos' width={200} height={200} className="mx-auto"/>
            <div className='p-2'>
              <h2 className='text-xl text-sky-900 font-semibold mb-2'>Estados Unidos</h2>
              <p className='text-gray-600 text-xl text-justify'>
                Hablar inglés te permite acceder a oportunidades laborales internacionales y a una gran cantidad de recursos educativos. Además, 
                es la lengua oficial en muchos países y el idioma principal en Internet, lo que facilita la conexión con personas de todo el mundo,
                y te brinda acceso a una vasta cultura.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Idiomas

  