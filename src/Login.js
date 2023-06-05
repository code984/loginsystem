import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import validateLoginForm from './LoginValidation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateLoginForm(email, password);

    if (Object.keys(validationErrors).length === 0) {
      try {
        // Send a request to your backend to check if the email and password match
        const response = await fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          // Login successful
          console.log('Login successful!');
          navigate('/home');
        } else {
          // Login failed
          const errorData = await response.json();
          console.error('Login failed:', errorData.message);
          setErrors({ login: errorData.message });
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className='d-flex justify-content-center align-item-center bg-primary vh-100'>
      
      <div className='bg-white p-3 rounded col-sm-3 h-50 mt-5'>
        <h2> Login</h2>
        <form onSubmit={handleSubmit} >
          <div className='mb-3'>
            <label htmlFor='email'><strong> Email</strong></label>
            <input
              type='text'
              placeholder='Email'
              className='form-control rounded-0'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className='text-danger'>{errors.email}</p>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'><strong> Password</strong></label>
            <input
              type='password'
              placeholder='Password'
              className='form-control rounded-0'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className='text-danger'>{errors.password}</p>}
          </div>
          {errors.login && <p className='text-danger'>{errors.login}</p>}
          <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
          <p>Don't have an Account</p>
          <Link to='/signup' className='btn btn-default border w-100 bg-light rounded-0 txt-decoration-non'>Create Account</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;


// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import validateLoginForm from './LoginValidation';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const validationErrors = validateLoginForm(email, password);

//     if (Object.keys(validationErrors).length === 0) {
//       try {
//         // Your login logic here
//         console.log('Login successful!');
//         navigate('/home');
//       } catch (error) {
//         console.error('Error during login:', error);
//       }
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   return (
//     <div className='d-flex justify-content-center align-item-center bg-primary vh-100'>
//       <div className='bg-white p-3 rounded col-sm-3 h-50 mt-5s'>
//         <h2> Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className='mb-3'>
//             <label htmlFor='email'><strong> Email</strong></label>
//             <input
//               type='text'
//               placeholder='Email'
//               className='form-control rounded-0'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {errors.email && <p className='text-danger'>{errors.email}</p>}
//           </div>
//           <div className='mb-3'>
//             <label htmlFor='password'><strong> Password</strong></label>
//             <input
//               type='password'
//               placeholder='Password'
//               className='form-control rounded-0'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {errors.password && <p className='text-danger'>{errors.password}</p>}
//           </div>
//           <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
//           <p>Don't have an Account</p>
//           <Link to='/signup' className='btn btn-default border w-100 bg-light rounded-0 txt-decoration-non'>Create Account</Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;






// import React, { useState } from 'react';
// import {useNavigate ,Link} from 'react-router-dom';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate =useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:3001/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       if (response.ok) {
//         console.log('Login successful!');
//         navigate('/home');
//       } else {
//         console.error('Login failed:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//     }
//   };

//   return (

    
//     <div className='d-flex justify-content-center align-item-center bg-primary vh-100'>
//     <div className='bg-white p-3 rounded col-sm-3 h-50 mt-5s'>

//             <h2> Login</h2>
//     <form onSubmit={handleSubmit}>
//     <div className='mb-3'> 
//     <label htmlFor='email'><strong> Email</strong></label>
              
//       <input
//         type="text"
//         placeholder="Email"
//         className='form-control rounded-0'
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       </div>
//       <div className='mb-3'> 
//       <label htmlFor='email'><strong> Password</strong></label>
              
//       <input
//         type="password"
//         placeholder="Password"
//         className='form-control rounded-0'
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       </div>
//       <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>                
//       <p>Don't have an Account</p>
//       <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 txt-decoration-non'>Create Account</Link>
//     </form>
//     </div>
//     </div>
//   );
// };

// export default LoginPage;

  



// import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { Link,useNavigate } from 'react-router-dom';
// import validation from './LoginValidation';
// import axios from 'axios';



// const initData={
//     email:'',
//     password:''
// }

// const Login = () => {
//     const [values,setValues] =useState(initData)
//     const navigate =useNavigate();
//     const [errors,setErrors] = useState({})

//     const handleChange=(event)=>{
//         setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
//     }

//     const handleSubmit=(event)=>{
//         event.preventDefault();
//         setErrors(validation(values));
//         if(errors.email ==="" && errors.password ===""){
//             axios.post('http://localhost:5000/signup_table',values)
//             .then(res => {
//                 if(res.data === "Success") {
//                     navigate('/home');
//                 }
//                 else{
//                     alert("No record existed")

//                 }
//             })
//             .catch(err => console.log(err));
//         }
//     }

//   return (
//     <div className='d-flex justify-content-center align-item-center bg-primary vh-100'>
//         <div className='bg-white p-3 rounded col-sm-3 h-50 mt-5 '>
//             <h2>Sign-In</h2>
//             <form action='' onSubmit={handleSubmit}>
//                 <div className='mb-3'> 
//                     <label htmlFor='email'><strong> Email</strong></label>
//                     <input
//                     type='email'
//                     name='email'
//                     placeholder='Enter Email'
//                     className='form-control rounded-0'
//                     onChange={handleChange}
//                     />
//                     {errors.email && <span className='text-danger'>{errors.email}</span>}
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
//                 <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
//                 <p>Don't have an Account</p>
//                 <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 txt-decoration-non'>Create Account</Link>
//             </form>
//         </div>
//     </div>
//   )
// }

// export  default Login;
