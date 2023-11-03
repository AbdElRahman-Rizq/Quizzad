import { useEffect, useState } from 'react';
import axios from 'axios';
import { Circles } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import '../../../assets/css/quiz.css'

export function QuizView() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState({
    title: '',
    description: '',
  });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/quizzes/${id}`, {
        withCredentials: true,
      });
      setQuiz(response.data.quiz);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);
    
    if (loading) {
      return (
        <div id="loading">
          <Circles
            height={500}
            width={60}
            color="#89288F"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      );
    }
    return (
    <div>
      <div className='row '>
{/*----------------- quiz image and details --------------------*/}
      <div className='col-md-7 text-light pt-3 '>
        <div className="bg-light border p-2 rounded-5">
                        <div className="text-center">
                            <a href="#">
                            <img
                                className="rounded-5 img-fluid shadow mt-2"
                                src="https://images.pexels.com/photos/4117968/pexels-photo-4117968.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Quiz Image"
                                style={{ width:'95%', height: '250px', objectFit: 'cover' }}
                                />
                            </a>
                        </div>
                        <div className="col-md-3 my-2">
                            <span className="badge bg-warning p-2 mx-3 b-3 fs-6 rounded-5 w-100">{quiz.difficultyLevel}</span>
                        </div>

                        <div className="p-2">
                        {/* <span className="badge bg-warning mb-2 b-3 fs-6 rounded-5">Intermediate</span> */}
                        <h4 className="mx-3 text-truncate text-dark" style={{ maxWidth: '100%' }}>
                        {quiz.title}
                        </h4>
                        </div>

                        <div className='row'>
                        <div className="col-md-6">
                            <h6 className="p-2 mx-3 text-dark" style={{ maxWidth: '100%' }}>
                                Teacher : 
                            </h6>
                        </div>

                        <div className="col-md-6">
                            <h6 className="p-2 mx-3 text-truncate text-dark" style={{ maxWidth: '100%' }}>
                                Subject : {quiz.subject}
                            </h6>
                        </div>
                        </div>

                        <div className='row'>
                        <div className="col-md-6">
                            <h6 className="p-2 mx-3 text-truncate text-dark" style={{ maxWidth: '100%' }}>
                                Class Name : 
                            </h6>
                        </div>

                        <div className="col-md-6">
                        <h6 className="p-2 mx-3 text-truncate text-dark" style={{ maxWidth: '100%' }}>
                                Grade Level : {quiz.gradeLevel}
                        </h6>
                        </div>
                        </div>                    
                    
                    <div className="d-flex spec d-wrap mx-2 pb-2">
                        <div className="d-flex col-md-6">
                        <div className="d-flex p-1">
                            <div>
                            <i className="fa-solid fs-5 p-1 fa-book text-align px-2" style={{ color: '#591c50' }} />
                            </div>
                            <div>
                            <p className="text-dark" style={{ maxWidth: '100%' }}>
                                Term : {quiz.term} 
                            </p>
                            </div>
                        </div>
                        <div className="d-flex p-1">
                            <div>
                            <i className="fa-solid fs-5 p-1 fa-person px-2" style={{ color: '#591c50' }} />
                            </div>
                            <div>
                            <p className="text-dark" style={{ maxWidth: '100%' }}>
                                 {quiz.unit}
                            </p>
                            </div>
                        </div>
                        </div>

                        <div className="d-flex col-md-6">
                        <div className="d-flex p-1">
                            <div>
                            <i className="fa-solid fs-5 fa-layer-group px-2 fa-person" style={{ color: '#591c50' }} />
                            </div>
                            <div>
                            <p className="text-dark" style={{ maxWidth: '100%' }}>
                                {quiz.lesson}
                            </p>
                            </div>
                        </div>

                        <div className="d-flex p-1">
                            <div>
                                <i className="fa-solid fs-5 fa-layer-group px-2 fa-person" style={{ color: '#591c50' }} />
                            </div>
                            <div>
                                <p className="text-dark" style={{ maxWidth: '100%' }}>
                                    {quiz.chapter}
                                </p>
                            </div>
                        </div>
                        </div>
                        </div>
        </div>
      </div>
      
{/*----------------- quiz Specific and details --------------------*/}
      <div className='col-md-5 text-light pt-3'>
        <div className="bg-light border p-3 rounded-5">
                        
            <div className="p-1">
            {/* <span className="badge bg-warning mb-2 b-3 fs-6 rounded-5">Intermediate</span> */}
            <h4 className="mx-3 text-truncate text-dark" >
                Description :
            </h4>
            <p className="pt-2 mx-3 text-dark">
                {quiz.description}
            </p>
            </div>

            <div className="ps-2">
            {/* <span className="badge bg-warning mb-2 b-3 fs-6 rounded-5">Intermediate</span> */}
            <h4 className="mx-1 text-truncate text-dark" >
                What you need to know ?!
            </h4>
            </div>

           <ol className="list-group list-group-numbered rounded-5">
                <li className="list-group-item">Quiz timer : {quiz.duration}</li>
                <li className="list-group-item">Passing Score : {quiz.passingScore} </li>
                <li className="list-group-item">Allowed attempts : {quiz.numOfAllowedAttempts} </li>
                <li className="list-group-item">Quiz deadline : {quiz.deadlineDate} </li>
                <li className="list-group-item">Privacy: {quiz.isPublic?'Public':'Private'} </li>
            </ol>



            <div className="d-flex">
            <button className=" mt-3 p-2 rounded-5 quizButton fs-5 fw-bold">Take Quiz</button>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}
