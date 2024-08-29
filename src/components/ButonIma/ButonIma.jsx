import Link from 'next/link';

const ButonIma = () => {
  return (
    <div className='text-center justify-items-center mx-auto mt-0 md:mt-10 mb-12 px-4 md:px-8'>
      <h1 className='text-3xl text-sky-900 font-bold mb-4'>Ejercicios Imagenes</h1>
    <Link href="/drag" legacyBehavior>
      <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Ir a las imagenes
      </a>
    </Link>
    </div>
  );
};

export default ButonIma;