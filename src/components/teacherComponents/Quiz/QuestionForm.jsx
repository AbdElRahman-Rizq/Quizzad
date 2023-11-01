import { Form, Row } from "react-bootstrap"
import "../../../assets/css/Question.css"
import "../../../assets/css/quiz.css"

import { useState } from "react";

function QuestionForm() {
    const [selectedOption, setSelectedOption] = useState('0');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };

  return (
    <div className="QuestionComponent py-5">
       
       <Form className="questionForm col-md-8 m-auto rounded-4 w-100 bg-none" enctype="multipart/form-data">


{/*---- Qusetion Type --- */}
<div className=' mb-3'>
    <label htmlFor="questionType" className="form-label px-1">Question Type</label>
    <select className="form-select rounded-5 p-3" name="questionType" onChange={handleOptionChange}>
        <option value="0">Select your question</option>
        <option value="1">Multiple Choices</option>
        <option value="2">Multiple Options</option>
        <option value="3">Short Answer</option>
        <option value="4">True & False</option>
    </select>
</div>  
<div className="mb-3">
          <label htmlFor="imgURL" className="form-label px-1">Image URL</label>
          <input type="menu" className="form-control rounded-5 p-3" id="imgURL" aria-describedby="textHelp" />
        </div>
        {/*------------------- Multiple Choices ----------------*/}
{selectedOption === '1' && (
    <>
        
<div className=" mb-3">
  <label htmlFor="option" className="form-label px-1">Question</label>
  <input type="menu" className="form-control rounded-5 p-3" aria-describedby="textHelp" />
</div>
<label className="mb-4"> You can choose one or more</label>
{/*---- Options --- */}
<div className="row">
{/*---- Option 1 --- */}
    <label htmlFor="option1" className="form-label px-3">Option #1</label>
  <div className="col-md-1 pt-2">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" />
    </div>
  </div>
  <div className="col-md-11">
    <input type="menu" className="form-control rounded-5 p-3" name="option1" aria-describedby="textHelp" />
  </div>
</div>
{/*---- Option 2 --- */}
<div className="row">
    <label htmlFor="option" className="form-label px-3">Option #2</label>
  <div className="col-md-1 pt-2">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" />
    </div>
  </div>
  <div className="col-md-11">
    <input type="menu" className="form-control rounded-5 p-3" aria-describedby="textHelp" />
  </div>
</div>
{/*---- Option 3 --- */}
<div className="row">
    <label htmlFor="option" className="form-label px-3">Option #3</label>
  <div className="col-md-1 pt-2">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" />
    </div>
  </div>
  <div className="col-md-11">
    <input type="menu" className="form-control rounded-5 p-3" aria-describedby="textHelp" />
  </div>
</div>
{/*---- Option 4 --- */}
<div className="row">
    <label htmlFor="option" className="form-label px-3">Option #4</label>
  <div className="col-md-1 pt-2">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" />
    </div>
  </div>
  <div className="col-md-11">
    <input type="menu" className="form-control rounded-5 p-3" aria-describedby="textHelp" />
  </div>
</div>

          {/* Correct Answer */}
          <div className="my-3">
            <label htmlFor="CorrectAnswer" className="form-label px-1">Correct Answer</label>
            <select className="form-select rounded-5 p-3" name="CorrectAnswer" >
                  <option value="0"></option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  <option value="3">Option 4</option>
              </select>
          </div>
          </>
          )}
          {/* ---------------------------- Multiple Options -----------------------*/}
          {selectedOption === '2' && (
              <>
                  
          <div className=" mb-3">
            <label htmlFor="option" className="form-label px-1">Question</label>
            <input type="menu" className="form-control rounded-5 p-3" aria-describedby="textHelp" />
          </div>
          <div className="row">
            {/*---- Option 1 --- */}
            <label htmlFor="option1" className="form-label px-3">Option #1</label>
            <div className="col-md-1 pt-2">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="option" id="option1" />
              </div>
            </div>
            <div className="col-md-11">
              <input type="menu" className="form-control rounded-5 p-3" name="option1" aria-describedby="textHelp" />
            </div>
          </div>
          {/*---- Option 2 --- */}
          <div className="row">
            <label htmlFor="option2" className="form-label px-3">Option #2</label>
            <div className="col-md-1 pt-2">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="option" id="option2" />
              </div>
            </div>
            <div className="col-md-11">
              <input type="menu" className="form-control rounded-5 p-3" name="option2" aria-describedby="textHelp" />
            </div>
          </div>
          {/*---- Option 3 --- */}
          <div className="row">
            <label htmlFor="option3" className="form-label px-3">Option #3</label>
            <div className="col-md-1 pt-2">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="option" id="option3" />
              </div>
            </div>
            <div className="col-md-11">
              <input type="menu" className="form-control rounded-5 p-3" name="option3" aria-describedby="textHelp" />
            </div>
          </div>
          {/*---- Option 4 --- */}
          <div className="row">
            <label htmlFor="option4" className="form-label px-3">Option #4</label>
            <div className="col-md-1 pt-2">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="option" id="option4" />
              </div>
            </div>
            <div className="col-md-11">
              <input type="menu" className="form-control rounded-5 p-3" name="option4" aria-describedby="textHelp" />
            </div>
          </div>
          {/* Correct Answer */}
          <div className="my-3">
            <label htmlFor="CorrectAnswer" className="form-label px-1">Correct Answer</label>
            <select className="form-select rounded-5 p-3" name="CorrectAnswer" >
                  <option value="0"></option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  <option value="3">Option 4</option>
              </select>
          </div>
          </>
          )}
          {/* --------------------------- Short Answer ---------------------------- */}
          {selectedOption === '3' && (
              <>
          <div className=" mb-3">
            <label htmlFor="option" className="form-label px-1">Question</label>
            <input type="menu" className="form-control rounded-5 p-3" aria-describedby="textHelp" />
          </div>
              </>
          )}
          {/* --------------------------- True OR False ----------------------------- */}
          {selectedOption === '4' && (
              <>
                  
          <div className=" mb-3">
            <label htmlFor="option" className="form-label px-1">Question</label>
            <input type="menu" className="form-control rounded-5 p-3" aria-describedby="textHelp" />
          </div>
          <div className="row">
            {/*---- Option 1 --- */}

            <div className="col-md-1 pt-2">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="option" id="True" />
              </div>
            </div>
            <div className="col-md-11">
              <input type="menu" className="form-control rounded-5 p-3" name="True" aria-describedby="textHelp" value={"True"}/>
            </div>
          </div>
          {/*---- Option 2 --- */}
          <div className="row mt-4">
            <div className="col-md-1 pt-2">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="option" id="False" />
              </div>
            </div>
            <div className="col-md-11">
              <input type="menu" className="form-control rounded-5 p-3" name="False" aria-describedby="textHelp" value={"False"} />
            </div>
          </div>
          {/* Correct Answer */}
          <div className="my-3">
            <label htmlFor="CorrectAnswer" className="form-label px-1">Correct Answer</label>
            <select className="form-select rounded-5 p-3" name="CorrectAnswer" >
                  <option value="1">True</option>
                  <option value="2">False</option>
              </select>
          </div>
          </>
          )}
          <div className="mb-3">
            <label htmlFor="QuestionDegree" className="form-label px-1">Question Degree</label>
            <select className="form-select rounded-5 p-3" name="QuestionDegree" >
                  <option value="0">5</option>
                  <option value="1">10</option>
                  <option value="2">20</option>
                  <option value="3">30</option>
              </select>
          </div>
          <div className='mb-3 m-auto col-md-6'>
                <button type="submit" className="quizButton rounded-5 p-2 w-100">Add Question</button>
          </div>
       </Form>
        </div>
  )
}

export default QuestionForm