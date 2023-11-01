import React, { useState, useRef, useEffect } from 'react';
import NavForQuiz from './NavForQuiz';
import QuestionForm from '../../teacherComponents/Quiz/QuestionForm';
import Slider from 'react-slick';
import "../../../assets/css/quiz.css"
import QuestionStudentView from './QuestionStudentView';
function TakeQuiz() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questionPage, setQuestionPage] = useState(0);
  const sliderRef = useRef(null);
  const [timer, setTimer] = useState(900); 

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
  // const progress = ((timer / 60) * 100).toFixed(2);
  const progress = ((timer / 90) * 100).toFixed(2);




  // Next Btn
  const handleNext = () => {
    setQuestionNumber((prevNumber) => prevNumber + 1);
    sliderRef.current.slickNext();
  };
// Prev Btn
  const handlePrevious = () => {
    setQuestionNumber((prevNumber) => prevNumber - 1);
    sliderRef.current.slickPrev();
  };

  return (
    <div>
      <NavForQuiz questionNumber={questionNumber} timer={formattedTime} />
      <div className="w-100">

      <div className="progressBar ms-5" style={{ width:"90%"  }}>
  <div className="progressBarFill" style={progress<=100 ?{width:`${progress}%` }:{width:`${progress/10}%`} }></div>
</div>

      {/* -------------------Questions------------------------ */}
      <div className="slider-container m-auto">
      <Slider ref={sliderRef} {...settings}>
        <div key={1}>
          {/* Question 1 */}
          <QuestionStudentView questionNumber={questionNumber} questionTitle={"What’s My Name ?!"} optionsNumber={4}/>
          <div className="col-md-12 d-flex">

         
<div className='my-3 m-auto col-md-3'>
  <button
    type='submit'
    className='quizButton rounded-4 p-3 fs-5'
    onClick={handlePrevious}
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
  >
    Next
    <i className='fa-solid fa-arrow-right ms-3' />
  </button>
</div>
    </div> {/*End of Btns */}
        </div> {/*End of key 1 */}
        <div key={2}>         

          {/*---------------------- Second question --------------------------*/}

          <QuestionStudentView questionNumber={questionNumber} questionTitle={" Is that a teacher ?!"} />
{/* Buttons */}
<div className="col-md-12 d-flex">

         
          <div className='my-3 m-auto col-md-3'>
            <button
              type='submit'
              className='quizButton rounded-4 p-3 fs-5'
              onClick={handlePrevious}
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
            >
              Next
              <i className='fa-solid fa-arrow-right ms-3' />
            </button>
          </div>
              </div> {/*End of Btns */}
        </div> {/*End of key 2 section */}
      </Slider>
      </div>
      </div>
    </div>
  );
}

export default TakeQuiz;