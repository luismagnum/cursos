import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="w-full h-80 md:min-h-screen flex flex-col justify-center items-center lg:px-32 px-2 bg-contain md:bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/assets/survey.jpg')" }}
    >
      <div className="w-full ml-0 space-y-4 px-2 lg:px-0 mb-28 md:mb-44 text-left">
        <h1 className="text-white font-bold text-2xl md:text-left md:text-6xl">CURSOS</h1>
        <p className="text-white w-1/3 text-base md:text-4xl font-bold">
          Educación y aprendizaje en línea.
        </p>
        <div className="flex justify-start mt-4">
          <button className="inline-block font-semibold tracking-wide border-none text-center bg-sky-900 hover:text-teal-500 duration-300 px-6 py-2 font-[Poppins] rounded-xl md:rounded-lg text-white min-w-[150px]">
            <a
              href="https://wa.me/5493412143000?text=Hola quiero hacer un pedido"
              target="_blank"
              className="flex items-center justify-center space-x-1"
            >
              <Image
                src="./whatsapp-fill.svg"
                alt="what"
                width={25}
                height={25}
                className="flex-shrink-0"
              />
              <span className="font-semibold sm:text-sm md:text-base">Click aquí</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

