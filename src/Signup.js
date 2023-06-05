import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { validateSignupForm } from './SignupValidation';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    const validationErrors = validateSignupForm(name, email, password);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear previous errors
    setErrors({});

    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (response.ok) {
        console.log('User registered successfully!');
        navigate('/');
      } else {
        console.error('Error during registration:', response.statusText);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-item-center bg-primary vh-100">
      <div className="bg-white p-3 rounded col-sm-3 h-50 mt-5">
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
          {/* Form fields and validation error handling */}
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            Sign Up
          </button>
          <p>Already have an account?</p>
          <Link to="/" className="btn btn-default border w-100 bg-light rounded-0 txt-decoration-non">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;




// import React, { useState } from 'react';
// import {useNavigate,Link } from 'react-router-dom';

// const Signup = () => {
  
//   const [name, setName] = useState('');
//   const [email,setEmail]=useState('')
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:3001/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({name,email, password }),
//       });
//       if (response.ok) {
//         console.log('User registered successfully!');
//       } else {
//         console.error('Error during registration:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error during registration:', error);
//     }
//   };

//   return (

//     <div className='d-flex justify-content-center align-item-center bg-primary vh-100'>
//         <div className='bg-white p-3 rounded col-sm-3 h-50 mt-5s'>

//             <h2> sign up</h2>
    
//     <form onSubmit={handleSubmit}>
//     <div className='mb-3'> 
//     <label htmlFor='name'><strong> Name</strong></label>  
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         className='form-control rounded-0'
//         onChange={(e) => setName(e.target.value)}
//       />
//       </div>
      
//       <div className='mb-3'>                    
//       <label htmlFor='name'><strong> Email</strong></label>
//       <input
//         type="text"
//         placeholder="Email"
//         value={email}
//         className='form-control rounded-0'
//         onChange={(e) => setEmail(e.target.value)}
//       />
//      </div>

//      <div className='mb-3'> 
//      <label htmlFor='name'><strong> Password</strong></label>
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         className='form-control rounded-0'
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       </div>
//       <button type='submit' className='btn btn-success w-100 rounded-0'>Sign UP</button>
//       <p>Already have an Account</p>
//        <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 txt-decoration-non'>Login</Link>
//     </form>

//     </div>
//     </div>
//   );
// };

// export default Signup;





// import React,{useState} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { Link, useNavigate } from 'react-router-dom';
// import validation from './SignupValidation';
// import axios from 'axios';


// const initData={
//     id:99,
//     name:'',
//     email:'',
//     password:''
// }

// const Signup = () => {

//     constructor=()=> {
//         super();
//         this.state={
//             title:'simple country Application',
//         }


//         }

//        }

//     // const [values,setValues] =useState(initData)
//     // const navigate =useNavigate();
//     // const [errors,setErrors] = useState({})

//     // const handleChange=(event)=>{
//     //     setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
//     // }

//     // const handleSubmit=(event)=>{
//     //     event.preventDefault();
//     //     setErrors(validation(values));
//     //     console.log("=======load")

//     //     if(errors.name === "" && errors.email ==="" && errors.password ===""){
//     //         axios.post('http://localhost:5000/signup',values).then(res => {
//     //             console.log("loadddddd,=========",res);
//     //             navigate('/')
//     //         }
            
//     //         )
//     //         .catch(err => console.log(err));
//     //     }
//     // }



//   return (
//     <div className='d-flex justify-content-center align-item-center bg-primary vh-100'>
//         <div className='bg-white p-3 rounded col-sm-3 h-50 mt-5s'>
//             <h2>Sign-Up</h2>
//             <form action='' onSubmit={handleSubmit}>
//             <div className='mb-3'> 
//                     <label htmlFor='name'><strong> Name</strong></label>
//                     <input
//                     type='text'
//                     name='name'
//                     placeholder='Enter Name'
//                     className='form-control rounded-0'
//                     onChange={handleChange}
//                     />
//                     {errors.name && <span className='text-danger'>{errors.name}</span>}
//                 </div>
//                 <div className='mb-3'> 
//                     <label htmlFor='email'><strong> Email</strong></label>
//                     <input 
//                     type='email' 
//                     name='email'
//                     placeholder='Enter Email' 
//                     className='form-control rounded-0'
//                     onChange={handleChange}
//                     />
//                    {errors.email && <span className='text-danger'>{errors.email}</span>}
//                 </div>
//                 <div className='mb-3'> 
//                     <label><strong> Password</strong></label>
//                     <input 
//                     type='password' 
//                     name='password'
//                     placeholder='Enter password' 
//                     className='form-control rounded-0'
//                     onChange={handleChange}
//                     />
//                     {errors.password && <span className='text-danger'>{errors.password}</span>}
//                 </div>
//                 <button type='submit' className='btn btn-success w-100 rounded-0'>Sign UP</button>
//                 <p>Already have an Account</p>
//                 <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 txt-decoration-non'>Login</Link>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Signup;
