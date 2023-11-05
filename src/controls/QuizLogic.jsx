import  { useState, useRef } from "react";
import { Accordion } from 'react-bootstrap';
import QuestionForm from '../components/teacherComponents/Quiz/QuestionForm';

export function useQuizLogic() {
  const [questions, setQuestions] = useState([]);
  const sliderRef = useRef(null);

  const next = (event) => {
    event.preventDefault();
    sliderRef.current.slickNext();
  };

  const previous = (event) => {
    event.preventDefault();
    sliderRef.current.slickPrev();
  };

  const handleAddQuestionClick = (event) => {
    event.preventDefault();
    const questionNumber = questions.length + 1;
    const newQuestion = (
      <Accordion.Item key={questionNumber} eventKey={questionNumber.toString()} className="my-3 rounded">
        <Accordion.Header className="accordion-header text-light">Question {questionNumber}</Accordion.Header>
        <Accordion.Body>
          <div className="quiz mb-3">
            <QuestionForm />
          </div>
        </Accordion.Body>
      </Accordion.Item>
    );

    setQuestions(prevQuestions => [...prevQuestions, newQuestion]);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
  };

  return { sliderRef, next, previous, handleAddQuestionClick, questions, settings };
}
