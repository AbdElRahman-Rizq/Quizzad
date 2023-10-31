import React, { useState } from 'react'
import NavForQuiz from './NavForQuiz'
import QuestionForm from '../../teacherComponents/Quiz/QuestionForm'
import ThemedButton from '../../layout/ThemedButton'

function TakeQuiz() {
  const [questionNubmer , setQuestionNubmer]=useState(0)  
  const [questionPage , setQuestionPage]=useState(0)  

  return (
    <div>
        <NavForQuiz questionNubmer={questionNubmer}/>
{/* Questions */}
{questionPage==0?
  <>
  <QuestionForm/>
  </>:null
}
<div className='mx-4 mb-4'>
  
<ThemedButton content={"Next"} propWidth={"15rem"} propPadding={".4rem 0rem"}/>
</div>
    </div>
  )
}

export default TakeQuiz