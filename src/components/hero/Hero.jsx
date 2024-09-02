

const Hero = () => {
  return (
    <div
      className='w-full h-80 md:min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-contain md:bg-cover bg-no-repeat'
      style={{ backgroundImage: "url('/assets/survey.jpg')" }}
    >
      <div className='w-full ml-0 space-y-4 px-5 lg:px-0 mb-36 md:mb-44'>
        <h1 className='text-left text-white font-bold text-2xl md:text-6xl'>CURSOS</h1>
        <p className='text-white w-1/3 text-base md:text-4xl font-bold'>
          Educación y aprendizaje en línea.
          <br></br>
          <button className="mt-2">
          <a href="https://wa.me/542984792639?text=Hola quiero hacer un pedido" target="_blank"><span className='sm:text-xs md:text-sm text-white ml-0 bg-sky-900 hover:bg-blue-500 px-4 py-2 rounded-lg'>Whatsapp</span></a>
          </button>
        </p>
      </div>
    </div>
  );
};

export default Hero;
