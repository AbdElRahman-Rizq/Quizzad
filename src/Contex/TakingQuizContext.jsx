import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';

const TakingQuizContext = createContext();

export const TakingQuizProvider = ({ children }) => {
  const [selectedAnswers, setSelectedAnswers] = useState([ ]);
  const [quizAttemptId, setQuizAttemptId] = useState(null);
  const [quizId, setQuizId] = useState(null);
  
  const handleAnswerSelect = (answerText, questionNumber) => {
    setSelectedAnswers((prevSelectedAnswers) => [
      ...prevSelectedAnswers,
      { [questionNumber]: answerText },
    ]);
  };
  
  const settingQuizAttemptId = (id) => {
    setQuizAttemptId(id);
  };

  const settingQuizId = (id) => {
    setQuizId(id);
  };

  const submitQuiz = async () => {
    try {
    //   const flatAnswers = flattenAnswers(selectedAnswers);
      const requestBody = {
        attemptId: quizAttemptId,
        answers: selectedAnswers,
        quizId,
        passingScore: 50,
      };
      
      const response = await axios.put(
        'http://localhost:5000/api/v1/quiz-attempts/update-quiz-attempt',
        requestBody,
        {
          withCredentials: true
        }
        
      );

      console.log(response.data);
      
      // Handle success (show a message, redirect, etc.)
    } catch (error) {
      console.error('Error updating quiz attempt', error);
      // Handle error (show a message, redirect, etc.)
    }
  };

//   const flattenAnswers = (answers) => {
//     const flatAnswers = {};
//     for (const questionNumber in answers) {
//       flatAnswers[questionNumber] = answers[questionNumber];
//     }
//     return flatAnswers;
//   };

  return (
    <TakingQuizContext.Provider
      value={{ handleAnswerSelect, settingQuizAttemptId, submitQuiz, settingQuizId }}
    >
      {children}
    </TakingQuizContext.Provider>
  );
};

export const useTakingQuiz = () => {
  const context = useContext(TakingQuizContext);
  if (!context) {
    throw new Error('useTakingQuiz must be used within a TakingQuizProvider');
  }
  return context;
};
