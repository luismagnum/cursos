"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
  WORD: 'word',
};

const exercises = [
  {
    word: 'Avião',
    images: [
      { id: 1, src: '/Avião.jpg', name: 'Avião' },
      { id: 2, src: '/carro.jpg', name: 'Carro' },
      { id: 3, src: '/bicicleta.jpg', name: 'Bicicleta' },
    ],
  },
  {
    word: 'Carro',
    images: [
      { id: 1, src: '/bicicleta.jpg', name: 'Bicicleta' },
      { id: 2, src: '/carro.jpg', name: 'Carro' },
      { id: 3, src: '/Avião.jpg', name: 'Avião' },
    ],
  },
  {
    word: 'Bicicleta',
    images: [
      { id: 1, src: '/carro.jpg', name: 'Carro' },
      { id: 2, src: '/bicicleta.jpg', name: 'Bicicleta' },
      { id: 3, src: '/Avião.jpg', name: 'Avião' },
    ],
  },
];

const DraggableWord = ({ word }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.WORD,
    item: { word },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`w-full p-2 text-center cursor-pointer bg-blue-500 text-white rounded-md ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      {word}
    </div>
  );
};

const DroppableImage = ({ image, onDrop }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.WORD,
    drop: (item) => onDrop(item.word, image),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`w-full sm:w-32 h-32 border-2 rounded-md p-2 ${
        isOver ? 'bg-green-100' : 'bg-white'
      } ${canDrop ? 'border-blue-500' : 'border-gray-300'}`}
    >
      <img src={image.src} alt={image.name} className="w-full h-full object-contain" width={20} />
    </div>
  );
};

const SingleExercise = ({ exercise }) => {
  const [feedback, setFeedback] = useState('');

  const handleDrop = (droppedWord, image) => {
    if (droppedWord === image.name) {
      setFeedback('¡Correcto!');
    } else {
      setFeedback('Incorrecta. Vuelve a intentar.');
    }
  };

  const handleReset = () => {
    setFeedback('');
  };

  return (
    <div className="p-4 mb-6 bg-gray-100 rounded-md">
      <h2 className="text-lg font-bold mb-4">
        Arrastra la palabra "{exercise.word}" a la imagen correcta
      </h2>
      <div className="flex flex-col items-center">
        <div className="flex space-x-4">
          {exercise.images.map((image) => (
            <DroppableImage key={image.id} image={image} onDrop={handleDrop} />
          ))}
        </div>
        <div className="w-full mt-4">
          <DraggableWord word={exercise.word} />
        </div>
      </div>
      {feedback && <p className="mt-4 text-lg">{feedback}</p>}
      {feedback && (
        <button
          onClick={handleReset}
          className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Intentar de nuevo
        </button>
      )}
    </div>
  );
};

const Exercise = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-8">
        {exercises.map((exercise, index) => (
          <SingleExercise key={index} exercise={exercise} />
        ))}
        <Link href="/" className="flex text-center items-center justify-center mx-auto text-sky-900 hover:text-blue-500 font-bold ml-12">Volver al Home</Link>
      </div>
    </DndProvider>
  );
};

export default Exercise;

