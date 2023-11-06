import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import NavForQuiz from './NavForQuiz';
import QuestionStudentView from './QuestionStudentView';
import axios from 'axios';
import { useTakingQuiz } from '../../../Contex/TakingQuizContext';

function TakeQuiz() {
  const quizId = 1;
  const [questionNumber, setQuestionNumber] = useState(1);
  const sliderRef = useRef(null);
  const [timer, setTimer] = useState(900);
  const [questions, setQuestions] = useState([]);
  const { handleAnswerSelect, settingQuizAttemptId, submitQuiz,settingQuizId } = useTakingQuiz(); // Use the useTakingQuiz hook
  const settings = { // For Slider
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
  };

  useEffect(() => {
   settingQuizId(quizId)
    // Fetch questions from the API using Axios
    const fetchQuestions = () => {
      axios.get(`http://localhost:5000/api/v1/quizzes/${quizId}/questions`, {
        withCredentials: true,
      })
        .then((response) => {
          setQuestions(response.data.questions);
        })
        .catch((error) => {
          console.error('Error fetching questions:', error);
          // Handle error (show a message, redirect, etc.)
        });
    };
    // Start quiz
    const startQuiz = () => {
      axios.post('http://localhost:5000/api/v1/quiz-attempts/start-quiz-attempt', { quizId }, {
        withCredentials: true,
      })
        .then((response) => {
          settingQuizAttemptId(response.data.id);
        })
        .catch((error) => {
          console.error('Error start quiz', error);
          // Handle error (show a message, redirect, etc.)
        });
    };
    fetchQuestions(); // Fetch questions initially
    startQuiz(); // Fetch questions initially
  }, [quizId]);


  const handleNext = () => {
    setQuestionNumber((prevNumber) => prevNumber + 1);
    sliderRef.current.slickNext();
  };

  const handlePrevious = () => {
    setQuestionNumber((prevNumber) => prevNumber - 1);
    sliderRef.current.slickPrev();
  };

useEffect(() => {  
  const timerInterval = setInterval(() => {
    setTimer((prevTimer) => prevTimer - 1);
  }, 1000);

  if (timer === 0) {
    clearInterval(timerInterval);
    // Navigate to the desired location when the timer runs out
    window.location.href = '/';
  }
   return () => {
    clearInterval(timerInterval);
  };
}, [timer]); // Include timer in the dependency array to re-run the effect when it changes


const formattedTime = `${Math.floor(timer / 60)
.toString()
.padStart(2, '0')}:${(timer % 60).toString().padStart(2, '0')}`;

const progress = ((timer / 90) * 100).toFixed(2);

  return (
    
    <div className="slider-container m-auto">
    <Slider ref={sliderRef} {...settings}>
{questions.map((q) => (
   <div key={q.id}>
      <NavForQuiz questionNumber={q.id} timer={formattedTime} />
      <div className="w-100">
        <div className="progressBar ms-5" style={{ width: "90%" }}>
          <div
            className="progressBarFill"
            style={progress <= 100 ? { width: `${progress}%` } : { width: `${progress / 10}%` }}
          ></div>
        </div>

            
              
                <QuestionStudentView               
                  questionTitle={q.questionText}
                  answers={q.answers}
                  questionImage={`http://localhost:5000/static/${q.questionImage}`}
                  questionId={q.id} // Pass questionNumber to QuestionStudentView
                  quizIdProp={quizId}
                />
                <div className="col-md-12 d-flex mt-5">
                  <div className='my-3 m-auto col-md-3'>
                    <button
                      type='submit'
                      className='quizButton rounded-4 p-3 fs-5'
                      onClick={handlePrevious}
                      disabled={questionNumber === 0}
                    >
                      <i className='fa-solid fa-arrow-left me-3' />
                      Back
                    </button>
                  </div>
                  <div className='my-3 m-auto col-md-3'>
                    <button
                      type='submit'
                      className='quizButton rounded-4 p-3 fs-5'
                      onClick={handleNext}
                      disabled={questionNumber === questions.length - 1}
                    >
                      Next
                      <i className='fa-solid fa-arrow-right ms-3' />
                    </button>
                  </div>
                </div>
             
          
        
      <div className="text-center w-50 mx-auto mb-3">
        <button
          type="button"
          className="quizButton rounded-4 p-3 fs-5"
          onClick={submitQuiz}
        >
          Submit Quiz
        </button>
      </div>
      </div>

      
    </div>
      ))}
    </Slider>
</div>
  );
}

export default TakeQuiz;
