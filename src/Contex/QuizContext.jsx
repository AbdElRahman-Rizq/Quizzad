import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const QuizContext = createContext();

export function QuizContextProvider(props) {

  const [myQuiz, setMyQuiz] = useState([]);

  useEffect(() => {
    const fetchQuizData= async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/v1/quizzes',
          {
            withCredentials: true,
          }
        );

        if (response.data.message === 'Quizzies retrieved successfully') {
            setMyQuiz(response.data.quizzes);
        }
      } catch (error) {
        console.error('Error fetching Quiz:', error);
      
      }
    };

    fetchQuizData();
  }, []);

  //
  
  const quizData = { myQuiz };

  return (
    <QuizContext.Provider value={quizData}>
      {props.children}
    </QuizContext.Provider>
  );
}
