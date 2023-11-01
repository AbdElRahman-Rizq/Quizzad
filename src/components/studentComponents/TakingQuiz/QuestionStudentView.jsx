import { Col, Row } from 'react-bootstrap'
import Teacher from '../../../assets/images/questionImg.png'
import ThemedButton from '../../layout/ThemedButton'


function QuestionStudentView({questionTitle,questionNumber,optionsNumber}) {
  return (
    <div className='mt-2'>
        <img src={Teacher} alt="Question1" width={"25%"} className='m-auto'/>
        <h4 className='text-center my-3'>Question {questionNumber}:{questionTitle}</h4>
        <Row className='answersSection w-100'>
            {
                optionsNumber>=4?
<>

            <Col lg={5} sm={10} className='my-4'>
            <ThemedButton content={"1- MOhamed Al-Shafiy"} propPadding={".7rem"} propWidth={"80%"}/>
            </Col>
            <Col lg={5}  sm={10} className='my-4'>
            <ThemedButton content={"2- MOhamed Al-Shafiy"} propPadding={".7rem"} propWidth={"80%"}/>
            </Col>
            <Col lg={5}  sm={10} className='my-4'>
            <ThemedButton content={"3- MOhamed Al-Shafiy"} propPadding={".7rem"} propWidth={"80%"}/>
            </Col>
            <Col lg={5}  sm={10} className='my-4'>
            <ThemedButton content={"4- MOhamed Al-Shafiy"} propPadding={".7rem"} propWidth={"80%"}/>
            </Col>
            </>
            :
            <>
            <Col lg={5} sm={10} className='my-4'>
            <ThemedButton content={"True"} propPadding={".7rem"} propWidth={"80%"}/>
            </Col>
            <Col lg={5}  sm={10} className='my-4'>
            <ThemedButton content={"False"} propPadding={".7rem"} propWidth={"80%"}/>
            </Col>
            </>
}
        </Row>
        
    </div>
  )
}

export default QuestionStudentView