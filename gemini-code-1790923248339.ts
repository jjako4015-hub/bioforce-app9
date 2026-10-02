import React, { useState } from 'react';

const QuizCard = ({ question, onAnswer }) => {
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOpt(index);
    setIsAnswered(true);
    
    // Жауаптың дұрыс/қате екенін тексеру
    const isCorrect = index === question.correctAnswer;
    setTimeout(() => onAnswer(isCorrect, question.id), 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 w-full max-w-md mx-auto mt-4 border border-green-50">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">{question.question}</h3>
      <div className="space-y-3">
        {question.options.map((opt, idx) => {
          let btnClass = "bg-gray-50 border-gray-200 text-gray-700 hover:bg-green-50";
          
          if (isAnswered) {
            if (idx === question.correctAnswer) {
              btnClass = "bg-green-100 border-green-500 text-green-800"; // Дұрыс жауап: Жасыл
            } else if (idx === selectedOpt) {
              btnClass = "bg-red-100 border-red-500 text-red-800"; // Қате жауап: Қызыл
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${btnClass}`}
            >
              <span className="font-bold mr-2">{String.fromCharCode(65 + idx)} нұсқа:</span> 
              {opt}
            </button>
          );
        })}
      </div>
      
      {isAnswered && selectedOpt !== question.correctAnswer && (
        <div className="mt-4 p-4 bg-orange-50 rounded-xl text-orange-800 text-sm animate-fade-in">
          🔴 Қате жауап. <strong>Қатемен жұмысқа қосылды!</strong>
        </div>
      )}
    </div>
  );
};