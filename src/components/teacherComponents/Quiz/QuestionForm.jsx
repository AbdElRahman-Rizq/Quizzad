import { Form } from "react-bootstrap"
import "../../../assets/css/Question.css"
import "../../../assets/css/quiz.css"

import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";

function QuestionForm() {
    const [selectedOption, setSelectedOption] = useState('0');
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
      console.log(selectedOption);
    };
    
    // Functions
    const handleQuestionForm = async (values) => {
        try {
            const formData = new FormData();
    
            for (const key in values) {
               console.log(key);
                    formData.append(key, values[key]);
               
            }
    
            const quizId = 1; // Replace with the actual quizId
            const response = await axios.post(
                `http://localhost:5000/api/v1/quizzes/${quizId}/questions`,
                formData,
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
    
            console.log(response.data); // Handle the response as needed
        } catch (error) {
            console.error("Error creating question:", error);
        }
    };
    
  

    const formik = useFormik({
        initialValues: {
            questionType: selectedOption,
            questionText: '',
            gradePoints: '0',
            questionImage: null,
        },
        onSubmit: handleQuestionForm,
    });

    return (
        <div className="QuestionComponent py-5">
            <form
                onSubmit={formik.handleSubmit}
                onChange={(e) => {
                    e.preventDefault()
                    console.log("Form changed");
                }}
                className="questionForm col-md-8 m-auto rounded-4 w-100 bg-none"
                encType="multipart/form-data"
            >
                {/* Your form fields... */}

                <div className=' mb-3'>
                    <label htmlFor="questionType" className="form-label px-1">Question Type</label>
                    <select
                        className="form-select rounded-5 p-3"
                        name="questionType"
                        onChange={(e) => {
                            handleOptionChange(e);
                            formik.handleChange(e);
                        }}
                        value={selectedOption}
                    >
                        <option value="0">Select your question</option>
                        <option value="MULTIPLE_CHOICES">Multiple Choices</option>
                        <option value="MULTIPLE_OPTIONS">Multiple Options</option>
                        <option value="SHORT_ANSWER">Short Answer</option>
                        <option value="TRUE_FALSE">True & False</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="uploaded_file" className="form-label px-1">Image</label>
                    <input
    type="file"
    className="form-control p-3 rounded-4"
    name="questionImage" // Change to "image"
    onChange={(e) => {
        formik.setFieldValue("questionImage", e.target.files[0]);
    }}
/>

                </div>

                <div className=" mb-3">
                    <label htmlFor="option" className="form-label px-1">Question</label>
                    <input
                        type="menu"
                        className="form-control rounded-5 p-3"
                        name="questionText"
                        aria-describedby="textHelp"
                        value={formik.values.questionText}
                        onChange={formik.handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="QuestionDegree" className="form-label px-1">Question Degree</label>
                    <select
                        className="form-select rounded-5 p-3"
                        name="gradePoints"
                        value={formik.values.gradePoints}
                        onChange={formik.handleChange}
                    >
                        <option value="0">5</option>
                        <option value="1">10</option>
                        <option value="2">20</option>
                        <option value="3">30</option>
                    </select>
                </div>

                <div className='mb-3 m-auto col-md-6'>
                    <button type="submit" className="quizButton rounded-5 p-2 w-100">Add Question</button>
                </div>
            </form>
            {/* Answers form */}
            <form className="questionForm col-md-8 m-auto rounded-4 w-100 bg-none">
                {/*------------------- Multiple Choices ----------------*/}
                {selectedOption === 'MULTIPLE_CHOICES' && (
                    <>
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
                    </>
                )}
                {/* --------------------------- True OR False ----------------------------- */}
                {selectedOption === '4' && (
                    <>
                        <div className="row">
                            {/*---- Option 1 --- */}
                            <div className="col-md-1 pt-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="option" id="True" />
                                </div>
                            </div>
                            <div className="col-md-11">
                                <input type="menu" className="form-control rounded-5 p-3" name="True" aria-describedby="textHelp" value={"True"} />
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
                <div className='mb-3 m-auto col-md-6'>
                    <button type="submit" className="quizButton rounded-5 p-2 w-100">Add Answers</button>
                </div>
            </form>
        </div> //End of component
    )
}

export default QuestionForm;
