import Image from "next/image"
import { FaFacebook, FaInstagram, } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import Botonw from "../botonw/Botonw";


const section = [
    {
        title:"Cursos Online",
        items:["cursos","ingles","portugues"]
    },
    {
        title:"Cursos Online",
        items:["zoom","practicas","en vivo"]
    },
    {
        title:"Cursos Online",
        items:["basico","intermedio","avanzado"]
    },
    {
        title:"Cursos Online",
        items:["basico","intermedio","avanzado"]
    },
]

const items = [
    {
        name:"Facebook",
        icon:FaFacebook,
        link: 'https://facebook.com'
    },
    {
        name:"Instagram",
        icon:FaInstagram,
        link: 'https://twitter.com'
    },
    {
        name:"Twitter",
        icon:FaXTwitter,
        link: 'https://twitter.com'
    },
]

const Footer = () => {
  return (
    <div className='w-full mt-12 bg-slate-900 text-gray-300 py-y px-2'>
        <br></br>
        <span>
        <Image src='/curso.png' alt='' width={50} height={50} className='bg-white rounded-full text-center mx-auto mb-6 object-contain'/>
        </span>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 text-center border-b-2 border-gray-600 py-4'>
        {
            section.map((section,index)=>(
                <div key={index}>
                    <h6 className='font-bold uppercase pt-2'>
                        {section.title}
                    </h6>
                    <ul>
                        {section.items.map((item,i)=>(
                            <li key={i}
                            className='py-1 text-gray-500 hover:text-white cursor-pointer'>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))
        }
        <div className='col-span-2 pt-8 md:pt-2'>
            <p className='font-bold uppercase'>
             Informacion
            </p>
            <div className='flex flex-col sm:flex-row sm:justify-center sm:items-center text-center mx-auto'>
            <Botonw />
            </div>
        </div>
      </div>
        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between
        sm:flex-row text-center text-gray-500'>
            <p className='py-4'>
                @2024 Dev Luis E. Diaz.
            </p>

            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl mb-10'>
                {
                    items.map((x,index)=>{
                        return <x.icon key={index} className='hover:text-white cursor-pointer'/>
                })
                }
            </div>
        </div>
        <div className='flex items-center justify-center mx-auto'>
            <button className='grid grid-cols-1'>
              <a className='flex text-center text-slate-500 font-semibold text-xl hover:text-slate-200 mb-10' href='./'>HOME</a>
            </button>
        </div>
    </div>
  )
}

export default Footer