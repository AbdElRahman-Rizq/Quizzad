import { Form, Row } from "react-bootstrap"
import "../../../assets/css/Question.css"

function QuestionForm() {
  return (
    <div className="QuestionComponent py-5">
       
       <Form className="questionForm col-md-8 m-auto rounded-4 w-50" enctype="multipart/form-data">
<h2 className="text-center mb-3">Questions</h2>

{/*---- Qusetion Type --- */}
<div className=' mb-3'>
    <label htmlFor="questionType" className="form-label px-1">Question Type</label>
    <select className="form-select rounded-5 p-3" name="questionType" >
        <option value="0">Select your question</option>
        <option value="1">Multiple Choices</option>
        <option value="2">Multiple Options</option>
        <option value="3">Short Answer</option>
        <option value="4">True & False</option>
    </select>
</div>  
{/*---- Img url --- */}
<div className=" mb-3">
  <label htmlFor="imgURL" className="form-label px-1">Image URL</label>
  <input type="menu" className="form-control rounded-5 p-3" id="imgURL" aria-describedby="textHelp" />
</div>
{/*---- Enter the qusetion --- */}
<div className=" mb-3">
  <label htmlFor="option" className="form-label px-1">Question</label>
  <input type="menu" className="form-control rounded-5 p-3" aria-describedby="textHelp" />
</div>
{/*---- Options --- */}
<div className="row">
{/*---- Option 1 --- */}
    <label htmlFor="option1" className="form-label px-3">Option #1</label>
  <div className="col-md-1 pt-2">
    <div className="form-check ms-1">
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
    <div className="form-check ms-1">
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
    <div className="form-check ms-1">
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
    <div className="form-check ms-1">
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

<div className="mb-3">
  <label htmlFor="Question Degree" className="form-label px-1">Question Degree</label>
  <select className="form-select rounded-5 p-3" name="gender" >
        <option value="0">10</option>
        <option value="1">20</option>
        <option value="2">30</option>
    </select>
</div>
<div className='mb-3 m-auto col-md-6'>
      <button type="submit" className="btn btn-primary rounded-5 p-2 w-100">Add Question</button>
</div>
       </Form>
        </div>
  )
}

export default QuestionForm