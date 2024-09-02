import Image from "next/image"
import Link from 'next/link';

const ButonPre = () => {
    return (
      <div>
        <h1 className='text-sky-900 font-bold text-xl md:text-3xl text-center'>Quieres practicar Brasileiro?</h1>
        <div className='flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 mx-4 mb-14'>
        <Image src='/fotobr.png' alt='br' width={400} height={400}/>
        <div className='grid grid-cols-1 md:grid-cols-3 text-center mx-auto'>
    <div className='text-center justify-items-center mx-auto mt-0 md:mt-10 mb-12 px-4 md:px-8'>
      <h1 className='text-3xl text-sky-900 font-bold mb-4'>Ejercicios Imagenes</h1>
    <Link href="/drag" legacyBehavior>
      <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Ir a las imagenes
      </a>
    </Link>
    </div>
    <div className='text-center justify-items-center mx-auto mt-0 md:mt-2 mb-12 px-4 md:px-8'>
            <Image src="/brflag.png" alt="br" width={300} height={300}/>
          </div>
    <div className='text-center justify-items-center mx-auto mt-0 md:mt-10 mb-12 px-4 md:px-8'>
      <h1 className='text-3xl text-sky-900 font-bold mb-4'>Ejercicios Seleccion</h1>
    <Link href="/ejercicios" legacyBehavior>
      <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Ir a los ejercicios
      </a>
    </Link>
    </div>
    </div>
    </div>
    </div>
    )
  }
  
  export default ButonPre;
