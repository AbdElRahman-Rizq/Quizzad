import '../../assets/css/authentication.css';
import Logo from '../../assets/images/logo.png';
import Exam from '../../assets/images/Exams-bro.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export default function Register() {
  const navigate = useNavigate();
  const [isloading, setisloading] = useState(false);
  const [error, seterror] = useState(null);

  async function registerSubmit(values) {
    setisloading(true);

    try {
      // Log the form values
      console.log(values);

      // Make a POST request to your API
      const response = await axios.post('http://localhost:5000/api/v1/users/', values);

      // Check the response and navigate to login if successful
      if (response.data.message === 'success') {
        setisloading(false); // Set loading state to false
        navigate('/login');
        console.log(response.data);
      }
    } catch (err) {
      setisloading(false); // Set loading state to false
      seterror(err.response.data.message);
      console.log(err);
    }
  }

  const validateSchema = Yup.object({
    firstName: Yup.string()
      .required('First Name is required')
      .min(3, 'First Name must be at least 3 characters')
      .max(10, 'First Name must be at most 10 characters'),

    lastName: Yup.string()
      .required('Last Name is required')
      .min(3, 'Last Name must be at least 3 characters')
      .max(10, 'Last Name must be at most 10 characters'),

    gender: Yup.string().required().oneOf(['MALE', 'FEMALE'], 'Invalid gender'),

    birthdate: Yup.string().required(),

    grade: Yup.string().required(),

    role: Yup.string().required(),

    phoneNumber: Yup.string()
      .required('Phone Number is required')
      .matches(/^(010|011|015|012)[0-9]{8}$/, 'Enter a valid Egyptian phone number'),

    email: Yup.string().required('Email is required').email('Enter a valid email address'),

    password: Yup.string()
      .required('Password is required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
        'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character'
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      phoneNumber: '',
      password: '',
      firstName: '',
      lastName: '',
      gender: '',
      birthdate: '',
      role: '',
      grade: '',
      Specialization: '',
    },
    validationSchema: validateSchema,
    onSubmit: registerSubmit,
  });

  return (
    <div className="">
      <section className="register">
        <div className="exam">
          <img src={Exam} className="" alt="" />
        </div>
        <div className="container">
          <form onSubmit={formik.handleSubmit} className="form bg-light rounded-5 px-5 py-4">
            <div className="formLogo">
              <img src={Logo} width={'100%'} alt="" />
            </div>
            <div className="formHeader text-center pt-3">
              <h1>Sign up Your Account</h1>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="firstName py-2">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    type="text"
                    className="form-control rounded-5"
                    id="firstName"
                    name="firstName"
                  />
                  {formik.errors.firstName && formik.touched.firstName && (
                    <p className="mt-2 p-2 text-danger">{formik.errors.firstName}</p>
                  )}
                </div>
              </div>

              {/* Add similar code for other form fields */}

              <div className="col-md-6">
                {formik.values.role === 'TEACHER' ? (
                  // Specialization field
                  <div className="Specialization py-2">
                    <label htmlFor="Specialization" className="form-label w-100">
                      Specialization
                    </label>
                    <select
                      className="form-select rounded-5"
                      name="Specialization"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.Specialization}
                    >
                      <option value="">Select your Specialization</option>
                      <option value="Science">Science</option>
                      <option value="Arabic">Arabic</option>
                      <option value="Math">Math</option>
                    </select>
                    {formik.errors.Specialization && formik.touched.Specialization && (
                      <p className="mt-2 p-2 text-danger">{formik.errors.Specialization}</p>
                    )}
                  </div>
                ) : (
                  // Grade field
                  <div className="grade py-2">
                    <label htmlFor="grade" className="form-label w-100">
                      Grade Level
                    </label>
                    <select
                      className="form-select rounded-5"
                      name="grade"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.grade}
                    >
                      <option value="">Select your grade</option>
                      <option value="PRIMARY_ONE">Grade 1</option>
                      {/* Add options for other grades */}
                    </select>
                    {formik.errors.grade && formik.touched.grade && (
                      <p className="mt-2 p-2 text-danger">{formik.errors.grade}</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="py-2 haveAccount">
              <span>
                You have an account? <Link to="/login" className="text-dark">
                  Sign in
                </Link>
              </span>
            </div>
            <div className="formBtn col-4 text-center m-auto mt-3 rounded-4 d-flex">
              {isloading ? (
                <button type="button" className="btn text-white">
                  <i className="fas fa-spinner fa-spin"></i>
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn w-100 py-2 text-white fs-bold"
                  disabled={!formik.isValid || !formik.dirty}
                >
                  Sign Up
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
