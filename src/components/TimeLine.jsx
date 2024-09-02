import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Timeline = () => {
  useEffect(() => {
    AOS.refresh(); // Refresca AOS después de la carga del componente
  }, []);

  const timelineData = [
    { date: 'Inicio', title: 'Bienvenida', description: 'Introducción al curso y objetivos.' },
    { date: 'Semana 1', title: 'Fundamentos', description: 'Aprender las bases del idioma.' },
    { date: 'Semana 2', title: 'Conversación', description: 'Mejorar la fluidez verbal.' },
    { date: 'Semana 3', title: 'Escritura', description: 'Desarrollo de habilidades escritas.' },
    { date: 'Fin', title: 'Examen Final', description: 'Evaluación del curso completo.' },
  ];

  return (
    <div className='text-center mx-auto mt-0 md:mt-10 mb-12 px-4 md:px-8'>
        <h1 className='text-3xl text-sky-900 font-bold mb-4'>Tu camino de Aprendizaje</h1>
    <div className="flex flex-col md:grid md:grid-cols-9 mx-auto p-2 text-blue-50">
      {timelineData.map((item, index) => (
        <div
          key={index}
          className="flex md:contents"
          data-aos="fade-up" // AOS animation
        >
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-sky-900 pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
          </div>
          <div className="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md bg-sky-900">
            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
            <p className="leading-tight text-justify">{item.description}</p>
            <span className="text-sm text-gray-300">{item.date}</span>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Timeline;
