"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Ejercicios = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState('');

  const questions = [
    {
      text: '¿Cómo se dice "gracias" en ingles?',
      options: ['Gracias', 'Obrigado', 'Merci', 'Thank you'],
      correctAnswer: 'Thank you',
    },
    {
      text: '¿Cómo se dice "por favor" en ingles?',
      options: ['Por favor', 'Por favorito', 'S\'il vous plaît', 'Please'],
      correctAnswer: 'Please',
    },
    {
      text: '¿Cómo se dice "hola" en ingles?',
      options: ['Hola', 'Bonjour', 'Olá', 'Hello'],
      correctAnswer: 'Hello',
    },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestionIndex].correctAnswer) {
      setFeedback('¡Correcto!');
    } else {
      setFeedback('Incorrecta. Vuelve a intentar.');
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setFeedback('');
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(0); // Reinicia al primer ejercicio después del último.
    }
  };

  return (
    <div className="text-center">
      <h1 className='text-2xl text-sky-900 font-bold mt-10'>Ejercicios de Ingles</h1>
      <h2 className="text-xl font-semibold">Selecciona la respuesta correcta</h2>
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">{questions[currentQuestionIndex].text}</h2>
      <div className="space-y-2">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`w-full text-left px-4 py-2 rounded-md border transition-colors ${
              selectedOption === option
                ? option === questions[currentQuestionIndex].correctAnswer
                  ? 'bg-green-200 border-green-500'
                  : 'bg-red-200 border-red-500'
                : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
            }`}
            disabled={selectedOption !== null}
          >
            {option}
          </button>
        ))}
      </div>
      {feedback && <p className="mt-4 text-lg">{feedback}</p>}
      {selectedOption && (
        <button
          onClick={handleNextQuestion}
          className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          {currentQuestionIndex < questions.length - 1 ? 'Siguiente pregunta' : 'Reiniciar preguntas'}
        </button>
      )}
      <Link href="/" className="flex text-center items-center justify-center  text-sky-900 hover:text-blue-500 font-bold ml-6">Volver al Home</Link>
    </div>
    </div>
  );
};

export default Ejercicios;