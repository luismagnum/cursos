import Link from 'next/link';

const ButonPre = () => {
  return (
    <div className='text-center justify-items-center mx-auto mt-0 md:mt-10 mb-12 px-4 md:px-8'>
      <h1 className='text-3xl text-sky-900 font-bold mb-4'>Ejercicios Seleccion</h1>
    <Link href="/ejercicios" legacyBehavior>
      <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Ir a los ejercicios
      </a>
    </Link>
    </div>
  );
};

export default ButonPre;
