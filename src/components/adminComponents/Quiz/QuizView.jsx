import { useEffect, useState } from 'react';
import axios from 'axios';
import { Circles } from 'react-loader-spinner';
import { NavLink, useParams } from 'react-router-dom';
import '../../../assets/css/quiz.css'
import { gradeLevelMap } from '../../../controls/gradeLevel';

export function QuizView() {
  const { id } = useParams();
  const [imageURL, setImageURL] = useState('');

  const [quiz, setQuiz] = useState({
    title: '',
    description: '',
  });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/quizzes/${id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setQuiz(response.data.quiz);
      
      const imageName = response.data.quiz.quizImage;
      const imageUrl =`http://localhost:5000/static/${imageName}`
      setImageURL(imageUrl);

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
    console.log(imageURL);
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
                                src={imageURL}
                                alt="Quiz Image"
                                style={{ width:'95%', height: '250px', objectFit: 'cover' }}
                                                                        // crossOrigin="anonymous"

                                />
                            </a>
                        </div>
                        <div className="col-md-3 my-2">
                            <span className="badge bg-warning p-2 mx-3 b-3 fs-6 rounded-5 w-100">{quiz.difficultyLevel}</span>
                        </div>

                        <div className="p-2">
                        <h4 className="mx-3 text-truncate text-dark" style={{ maxWidth: '100%' }}>
                        <i className="fa fa-duotone fa-microscope fs-2 me-2" style={{ color: '#89288F' }} />
                        {quiz.title}
                        </h4>
                        </div>

                        <div className='row'>
                        <div className="col-md-6">
                            <h6 className="p-2 mx-3 text-dark" style={{ maxWidth: '100%' }}>
                            <i className="fa fa-light fa-chalkboard-user fs-5 me-2" style={{color: "#89288F"}}/>
                                Teacher : {quiz.adminId? quiz.creatorAdmin.profile.firstName:quiz.creatorTeacher.profile.firstName} {quiz.adminId? quiz.creatorAdmin.profile.lastName:quiz.creatorTeacher.profile.lastName }  
                            </h6>
                        </div>

                        <div className="col-md-6">
                            <h6 className="p-2 mx-3 text-truncate text-dark" style={{ maxWidth: '100%' }}>
                            <i className="fa fa-brands fa-artstation fs-5 me-2" style={{ color: '#89288F' }} />

                                Subject : {quiz.subject}
                            </h6>
                        </div>
                        </div>

                        <div className='row'>
                        <div className="col-md-6">
                            <h6 className="p-2 mx-3 text-truncate text-dark" style={{ maxWidth: '100%' }}>
                                <i className="fa fa-solid fa-landmark fs-5 me-2" style={{color: "#89288F"}}/>
                                Class Name : 
                            </h6>
                        </div>

                        <div className="col-md-6">
                        <h6 className="p-2 mx-3 text-truncate text-dark" style={{ maxWidth: '100%' }}>
                                <i className="fa fa-solid fa-user-graduate fs-5 me-2" style={{ color: '#89288F' }} />
                                Grade Level : {gradeLevelMap[quiz.gradeLevel]}
                        </h6>
                        </div>
                        </div>                    
                    
                    <div className="d-flex spec d-wrap mx-2 pb-2">
                        <div className="d-flex col-md-6">
                        <div className="d-flex p-2 ms-2 ">
                            <div>
                            <i className="fa fa-light fa-pen fs-5 me-2" style={{color: "#89288F"}}/>
                            </div>
                            <div>
                            <p className="text-dark" style={{ maxWidth: '100%' }}>
                                Term : {quiz.term} 
                            </p>
                            </div>
                        </div>
                        <div className="d-flex p-2 ms-2">
                            <div>
                            <i className="fa fa-regular fa-clipboard fs-5 me-2" style={{color: "#89288F"}}/>
                            </div>
                            <div>
                            <p className="text-dark" style={{ maxWidth: '100%' }}>
                                 {quiz.unit}
                            </p>
                            </div>
                        </div>
                        </div>

                        <div className="d-flex col-md-6">
                        <div className="d-flex p-2 ">
                            <div>
                            <i className="fa fa-solid fa-book-open-reader fs-5 me-2" style={{color: "#89288F"}}/>
                            </div>
                            <div>
                            <p className="text-dark" style={{ maxWidth: '100%' }}>
                                {quiz.lesson}
                            </p>
                            </div>
                        </div>

                        <div className="d-flex p-2 ms-4">
                            <div>
                            <i className="fa fa-solid fa-swatchbook fs-5 me-2 " style={{color: "#89288F"}}/>
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
                <li className="list-group-item">Quiz deadline : {(new Date(quiz.deadlineDate)).toLocaleDateString('en-GB')} </li>
                <li className="list-group-item">Privacy: {quiz.isPublic?'Public':'Private'} </li>
            </ol>

            <div className="d-flex col">
            <NavLink className=" m-3 p-2 rounded-5 text-center quizButton fs-5 fw-bold" to='questions'>Add questions</NavLink>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}
