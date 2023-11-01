import React, { useState, useRef, useEffect } from 'react';
import NavForQuiz from './NavForQuiz';
import QuestionForm from '../../teacherComponents/Quiz/QuestionForm';
import Slider from 'react-slick';
import "../../../assets/css/quiz.css"
function TakeQuiz() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questionPage, setQuestionPage] = useState(0);
  const sliderRef = useRef(null);
  const [timer, setTimer] = useState(90); 

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
  }, [timer]);
   // Format the remaining time as minutes and seconds (MM:SS)
  const formattedTime = `${Math.floor(timer / 60)
  .toString()
  .padStart(2, '0')}:${(timer % 60).toString().padStart(2, '0')}`;
  
  // Calculate the progress percentage
  const progress = ((timer / 60) * 100).toFixed(2);

  // Next Btn
  const handleNext = () => {
    setQuestionNumber((prevNumber) => prevNumber + 1);
    sliderRef.current.slickNext();
  };
// Prev Btn
  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div>
      <NavForQuiz questionNumber={questionNumber} timer={formattedTime} />
      <div className="progressBar">
        <div
          className="progressBarFill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="progressBar"></div>
      {/* Questions */}
      <Slider ref={sliderRef} {...settings}>
        <div key={1}>
          <QuestionForm />

          <div className='my-3 m-auto col-md-6'>
            <button
              type='submit'
              className='quizButton rounded-4 p-3 w-100 fs-5'
              onClick={handleNext}
            >
              Next
              <i className='fa-solid fa-arrow-right ms-3' />
            </button>
          </div>
        </div>
        <div key={2}>
          <div className='col-md-8 m-auto'>
            <hr />
          </div>

          {/*---------------------- Second question --------------------------*/}

          <QuestionForm />

          <div className='my-3 m-auto col-md-6'>
            <button
              type='submit'
              className='quizButton rounded-4 p-3 w-100 fs-5'
              onClick={handlePrevious}
            >
              <i className='fa-solid fa-arrow-left me-3' />
              Back
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default TakeQuiz;