import React, { useState } from 'react'

const faqData = [
    {
        question: "¿Los cursos son adecuados para principiantes?",
        awnser:"Sí, ofrecemos cursos para todos los niveles, desde principiantes hasta avanzados. .",
    },
    {
        question: "¿Cuánto tiempo dura cada curso?",
        awnser:" La duración de los cursos varía según el nivel y la modalidad que elijas.",
    },
    {
        question: "¿Los cursos incluyen material de estudio?",
        awnser:" Sí, todos nuestros cursos incluyen acceso a materiales de estudio como guías y ejercicios.",
    },
    {
        question: "¿Recibiré un certificado al completar el curso?",
        awnser:" Sí, al finalizar el curso y completar las evaluaciones correspondientes, recibirás un certificado digital.",
    },

]

const Frecuente = () => {
  const [active, setActive] = useState(null)
  const handleClick = (index) =>{
    setActive(index === active ? null: index);
  };
  return (
    <div className='max-w-2xl mx-auto mt-20 mb-28 px-3 py-4'>
      <h1 className='text-2xl text-sky-900 text-center font-bold pb-8'>Preguntas frecuentes</h1>
     {faqData.map((item, index) =>(
        <div key={index}>
            <div className="flex justify-between items-center cursor-pointer py-4" 
            onClick={() => handleClick(index)}>
                <h3 className='text-sm md:text-xl font-semibold text-gray-800'>{item.question}</h3>
                <span>{active == index ? "-" : "+"}</span>
            </div>
            {active == index && <p className='text-gray-500'>{item.awnser}</p>}
        </div>
     ))}

    </div>
  )
}

export default Frecuente
