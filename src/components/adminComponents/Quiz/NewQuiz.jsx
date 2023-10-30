import { useState } from 'react';
import '../../../assets/css/quiz.css'
import QuestionForm from '../../teacherComponents/Quiz/QuestionForm';

export function NewQuiz() {
  const [showQuestionForm, setShowQuestionForm] = useState(false);

  const handleAddQuestionClick = () => {
    setShowQuestionForm(true);
  };

  return (
        <div className='background '>
        <section className="py-3 Scroller">

        <form className='mx-2 m-auto p-3 rounded-4 '>
          <div className="container p-0">
            <div className="row mb-4">
              <div className="col-md-4 col-xl-10 text-center m-auto p-2 mt-1 rounded-4">
                <h3 className="p-2">Create New Quiz</h3>
              </div>
            </div>
          </div>

          <div className='row '> 
          {/*---------------------- quiz details--------------------------*/}      
          <div className='col-md-5 mx-auto '>
          <div>
            <h4 className='mb-5 text-center'>
              Quiz Details
            </h4>
          </div>

          <div className="title mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label px-3 fs-5">Quiz name</label>
            <input type="text" className="form-control rounded-4 p-3" id="exampleInputEmail1" aria-describedby="textHelp" />
          </div>
          
          <div className='subject mb-3'>
              <label htmlFor="gender" className="form-label px-3">Subject</label>
              <select className="form-select rounded-4 p-3" name="gender" >
                  <option value="0">Select your Subject</option>
                  <option value="1">Mathematics</option>
                  <option value="2">Physics</option>
              </select>
          </div>  

          <div className="description mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label px-3">Description</label>
            <input type="menu" className="form-control rounded-4 p-3" id="exampleInputEmail1" aria-describedby="textHelp" />
          </div>
          
          <div className="gradeLvl mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label px-3">Grade level</label>
              <select className="form-select rounded-4 p-3" name="gender" >
                  <option value="0">Select your Grade</option>
                  <option value="1">Grade 1</option>
                  <option value="2">Grade 2</option>
              </select>
          </div>

          <div className="Term mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label px-3">Term</label>
              <select className="form-select rounded-4 p-3" name="gender" >
                  <option value="0">Select your Term</option>
                  <option value="1">1st Term</option>
                  <option value="2">2nd Term</option>
              </select>
          </div>

          <div className="unit mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label px-3">Unit</label>
            <select className="form-select rounded-4 p-3" name="gender" >
                  <option value="0">Select your Unit</option>
                  <option value="1">Unit 1</option>
                  <option value="2">Unit 2</option>
              </select>      
          </div>

          <div className="Chapter mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label px-3">Chapter</label>
            <select className="form-select rounded-4 p-3" name="gender" >
                  <option value="0">Select your Chapter</option>
                  <option value="1">Chapter 1</option>
                  <option value="2">Chapter 2</option>
              </select>
          </div>

          <div className="Lesson mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label px-3">Lesson</label>
            <select className="form-select rounded-4 p-3" name="gender" >
                  <option value="0">Select your Lesson</option>
                  <option value="1">Lesson 1</option>
                  <option value="2">Lesson 2</option>
              </select>
          </div>
          </div>
          {/*---------------------- quiz spec--------------------------*/}      

          <div className='col-md-5 mx-auto'>
          <div>
            <h4 className='mb-5 text-center'>
              Quiz Specification
            </h4>
          </div>
          <div className="title mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label px-3">Passing Score</label>
            <input type="number" className="form-control rounded-4 p-3" id="exampleInputEmail1" aria-describedby="textHelp" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label px-3">Difficulty level</label>
            <select className="form-select rounded-4 p-3" name="gender" >
                  <option value="0">Select Difficulty level</option>
                  <option value="1">Easy</option>
                  <option value="2">Intermediate</option>
                  <option value="3">Hard</option>
              </select>
          </div>

          <div className="Duration mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label px-3">Quiz duration</label>
            <div className="input-group mb-3 d-flex">
              <input type="time" className="form-control rounded-4 p-3" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
            </div>
          </div>

          <div className="Deadline mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label px-3">Quiz deadline date</label>
            <input type="date" className="form-control rounded-4 p-3" id="exampleInputEmail1" aria-describedby="textHelp" />
          </div>
          
          <div className="Privacy mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label px-3">privacy</label>
            <select className="form-select rounded-4 p-3" name="gender" >
                  <option value="0">Select Quiz Privacy</option>
                  <option value="1">Public</option>
                  <option value="2">Private class</option>
              </select>
          </div>

          <div className="class mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label px-3">Select Class</label>
            <select className="form-select rounded-4 p-3" name="gender" >
                  <option value="0">Select Class</option>
                  <option value="1">option 1</option>
                  <option value="2">option 2</option>
              </select>
          </div>
          </div>
            {/*---------------------- seperator--------------------------*/}      

            <div className='col-md-8 m-auto'>
              <hr />
            </div>
            <div className="m-3 m-auto col-md-6">
        <button
        type='button'          
          className="quizButton rounded-4 p-3 w-100"
          onClick={handleAddQuestionClick}
        >
          Add Question
        </button>
      </div>

      {showQuestionForm && <QuestionForm />}
            {/*---------------------- seperator--------------------------*/}      
            <div className='col-md-8 m-auto'>
              <hr />
            </div>
          <div className='m-3 m-auto col-md-6'>
                <button type="submit" className="quizButton rounded-4 p-3 w-100">Create Quiz</button>
          </div>
          </div>
        </form>
        
        
        
        </section>
      </div>
  )
}
