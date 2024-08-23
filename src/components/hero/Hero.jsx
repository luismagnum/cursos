import Image from "next/image"

const Hero = () => {
    return (
      <div
        className='w-full h-80 md:min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-contain md:bg-cover bg-no-repeat'
        style={{ backgroundImage: "url('/assets/survey.jpg')" }}
      >
        <div className='w-full ml-0 space-y-5 px-5 lg:px-0 mb-12 lg:mb-28'>
          <h1 className='text-left text-white font-bold text-2xl md:text-6xl'>CURSOS</h1>
          <p className='text-white w-1/3 text-base md:text-4xl font-bold'>
            Educación y aprendizaje en línea.
          </p>
        </div>
      </div>
    );
  };
  
  export default Hero;