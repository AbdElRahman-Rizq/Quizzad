import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTakingQuiz } from '../../../Contex/TakingQuizContext';

function QuestionStudentView({ questionTitle, questionImage, answers,questionId }) {
  const { handleAnswerSelect } = useTakingQuiz(); // Use the useTakingQuiz hook
  return (
    <div className='mt-2'>
      <img src={questionImage} alt="Question" width={"25%"} className='m-auto' />
      <h4 className='text-center my-3'>Question {questionId}: {questionTitle}</h4>
      <Row className='answersSection w-100'>
        {answers.map((answer) => (
          <Col lg={5} sm={10} className='my-4' key={answer.id}>
            <button
              type='button'
              className='quizButton rounded-4 p-3 fs-5'
              onClick={() => handleAnswerSelect(answer.answerText, questionId)} // Pass answerId and questionNumber to handleAnswerSelect
            >
              {answer.answerText}
            </button>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default QuestionStudentView;
