import { FaWhatsapp } from "react-icons/fa";

const Botonw = () => {
    return (
      <div className='w-full ml-0 space-y-5 px-5 lg:px-0 mb-10 lg:mb-28 z-0'>
        <h1 className='text-teal-500 font-bold text-xl md:text-2xl'></h1>
      <div className='text-end text-teal-500 w-1/3 sm:text-xs md:text-xl font-bold mx-auto md:ml-32'>
      <button class="bg-sky-950 text-sky-400 border border-sky-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mb-20">
      <span class="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
      <a href="https://wa.me/543412143000?text=Hola quiero informacion" target="_blank"><span className="flex align-middle gap-2 text-sm">Whatsapp<FaWhatsapp/></span></a>
      </button>
      </div>
      </div>
    )
  }
  
  export default Botonw



