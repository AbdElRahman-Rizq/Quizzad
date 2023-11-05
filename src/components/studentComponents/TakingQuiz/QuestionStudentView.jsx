import { Col, Row } from 'react-bootstrap'


function QuestionStudentView({questionTitle,questionNumber,optionsNumber,questionImage,answers}) {
  console.log('Question Image:', questionImage);

  return (
    <div className='mt-2'>
        <img src={questionImage} alt="Question" width={"25%"} className='m-auto'/>
        <h4 className='text-center my-3'>Question {questionNumber}:{questionTitle}</h4>
        <Row className='answersSection w-100'>
        {answers.map((answer) => (
            <Col lg={5} sm={10} className='my-4'>
              <div key={answer.id}>
            <button
                      type='button'
                      className='quizButton rounded-4 p-3 fs-5'
                    >
                      {answer.answerText}                     
                    </button>
        
            </div>
            </Col>
            ))
}
        </Row>
        
    </div>
  )
}

export default QuestionStudentView