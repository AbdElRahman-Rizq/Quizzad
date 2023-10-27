import { Form, Row } from "react-bootstrap"
import "../../../assets/css/Question.css"

function QuestionForm() {
  return (
    <div className="QuestionComponent py-5">
       
       <Form className="questionForm col-md-8 m-auto rounded-4 w-50">
<h2 className="text-center">Questions</h2>


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

<div className=" mb-3">
  <label htmlFor="imgURL" className="form-label px-1">Image URL</label>
  <input type="menu" className="form-control rounded-5 p-3" id="imgURL" aria-describedby="textHelp" />
</div>
<div className=" mb-3">
  <label htmlFor="option" className="form-label px-1">Question</label>
  <input type="menu" className="form-control rounded-5 p-3" aria-describedby="textHelp" />
</div>
{/* Options */}
<div className="row">
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
<div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label px-1">Difficulty level</label>
  <select className="form-select rounded-5 p-3" name="gender" >
        <option value="0">Select Difficulty level</option>
        <option value="1">Easy</option>
        <option value="2">Intermediate</option>
        <option value="3">Hard</option>
    </select>
</div>

<div className="Deadline mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label px-1">Quiz deadline date</label>
  <input type="date" className="form-control rounded-5 p-3" id="exampleInputEmail1" aria-describedby="textHelp" />
</div>

<div className="Privacy mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label px-1">privacy</label>
  <select className="form-select rounded-5 p-3" name="gender" >
        <option value="0">Select Quiz Privacy</option>
        <option value="1">Public</option>
        <option value="2">Private class</option>
    </select>
</div>

<div className="class mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label px-1">Select Class</label>
  <select className="form-select rounded-5 p-3" name="gender" >
        <option value="0">Select Class</option>
        <option value="1">option 1</option>
        <option value="2">option 2</option>
    </select>
</div>

<div className='mb-3 m-auto col-md-6'>
      <button type="submit" className="btn btn-primary rounded-5 p-3 w-100">Submit</button>
</div>
       </Form>
        </div>
  )
}

export default QuestionForm