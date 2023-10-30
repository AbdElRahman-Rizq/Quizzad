import React, { Component } from "react";
import { Accordion } from 'react-bootstrap';
import Slider from "react-slick";
import '../../../assets/css/quiz.css'
import QuestionForm from '../../teacherComponents/Quiz/QuestionForm';


export class NewQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [], // Store the Accordion items
    };
  }

  next = (event) => {
    event.preventDefault();
    this.slider.slickNext();
  }

  previous = (event) => {
    event.preventDefault();
    this.slider.slickPrev();
  }

  handleAddQuestionClick = () => {
    const questionNumber = this.state.questions.length + 1;
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

    this.setState((prevState) => ({
      questions: [...prevState.questions, newQuestion],
    }));
  };


  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: false, // Replace with your custom previous arrow element or component
      nextArrow: false, // Replace with your custom next arrow element or component
    };
    
    return (
          <div className='background rounded-4 m-2'>
          <section className="py-3 Scroller">

          <form className='mx-2 m-auto p-3 rounded-4 '>
            <div className="container p-0">
              <div className="row mb-4">
                <div className="col-md-4 col-xl-10 text-center m-auto p-2 mt-1 rounded-4">
                  <h3 className="p-2">Create New Quiz</h3>
                </div>
              </div>
            </div>
            <Slider ref={c => (this.slider = c)} {...settings}>
                  <div key={1}>
                    
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
              <label htmlFor="exampleInputEmail1" className="form-label fs-5 px-3">Quiz Cover Image</label>
            <div className="input-group mb-2">
              <input type="file" className="form-control p-3 rounded-4" id="inputGroupFile02" />
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
            </div>
                    <div className='my-3 m-auto col-md-6'>
                      <button type="submit" className="quizButton rounded-4 p-3 w-100 fs-5" onClick={this.next}>
  
                        Questions Settings
                        <i className="fa-solid fa-arrow-right ms-3"/>
                        </button>
                    </div>
                  </div>
                  <div key={2}>
                  <div className='col-md-8 m-auto'>
                <hr />
              </div>
                
                
              {/*---------------------- Add question --------------------------*/}      

              <div className="m-3 m-auto col-md-6">
                <button
                  type='button'
                  className="quizButton rounded-4 p-3 w-100"
                  onClick={this.handleAddQuestionClick}>
                  Add Question
                </button>
              </div>
              
              <Accordion defaultActiveKey="null">
                {this.state.questions}
              </Accordion>  
                <div className='my-3 m-auto col-md-6'>
                  <button type="submit" className="quizButton rounded-4 p-3 w-100 fs-5" onClick={this.previous}>
                  <i className="fa-solid fa-arrow-left me-3" />
                    Class Settings</button>
                </div>
              </div>
            </Slider>
              {/*---------------------- seperator--------------------------*/}      
              <div className='col-md-8 m-auto'>
                <hr />
              </div>
            <div className='m-3 m-auto col-md-6'>
                  <button type="submit" className="quizButton rounded-4 p-3 w-100">Create Quiz</button>
            </div>
          </form>
          </section>
        </div>
    );
}}

