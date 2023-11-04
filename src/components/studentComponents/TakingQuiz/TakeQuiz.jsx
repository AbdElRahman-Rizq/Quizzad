import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import NavForQuiz from './NavForQuiz';
import QuestionStudentView from './QuestionStudentView';
import Cookies from 'js-cookie';
import axios from 'axios';

function TakeQuiz() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const sliderRef = useRef(null);
  const [timer, setTimer] = useState(900);
  const [questions, setQuestions] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
  };

  
  useEffect(() => {
    // const jwtToken = Cookies.get('jwt');
  
    // if (!jwtToken) {
    //   // Redirect to login or show an error message
    //   window.location.href = '/login';
    // }
  
    // Fetch questions from the API using Axios
    axios.get('http://localhost:5000/api/v1/quizzes/1/questions', {
      withCredentials: true,
      
  })
      .then((response) => {
        setQuestions(response.data.questions);
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
        // Handle error (show a message, redirect, etc.)
      });
  
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
  
      // Provide feedback to the user (change color, display warning, etc.)
    }, 1000);
  
    if (timer === 0) {
      clearInterval(timerInterval);
      // Redirect to a specific location when the timer runs out
      window.location.href = '/';
    }
  
    return () => {
      clearInterval(timerInterval);
    };
  }, [timer]);
  

  const formattedTime = `${Math.floor(timer / 60)
    .toString()
    .padStart(2, '0')}:${(timer % 60).toString().padStart(2, '0')}`;

  const progress = ((timer / 90) * 100).toFixed(2);

  const handleNext = () => {
    setQuestionNumber((prevNumber) => prevNumber + 1);
    sliderRef.current.slickNext();
  };

  const handlePrevious = () => {
    setQuestionNumber((prevNumber) => prevNumber - 1);
    sliderRef.current.slickPrev();
  };

  return (
    <div>
      <NavForQuiz questionNumber={questionNumber} timer={formattedTime} />
      <div className="w-100">
        <div className="progressBar ms-5" style={{ width: "90%" }}>
          <div
            className="progressBarFill"
            style={progress <= 100 ? { width: `${progress}%` } : { width: `${progress / 10}%` }}
          ></div>
        </div>

        <div className="slider-container m-auto">
          <Slider ref={sliderRef} {...settings}>
            {questions.map((q) => (
              <div key={q.id}>
                <QuestionStudentView questionTitle={q.questionText} />
                <div className="col-md-12 d-flex">
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
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TakeQuiz;
