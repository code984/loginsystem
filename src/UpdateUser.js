import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUser = ({ match }) => {
  const {id} = useParams();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/view/${id}`);
      if (response.status === 200) {
        const { name, email, password } = response.data;
        setUser({ name, email, password });
      } else {
        console.error('Failed to fetch user:', response.statusText);
      }
    } catch (error) {
      console.error('Error during user fetch:', error);
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3001/update/${id}`,user);
      if (response.status === 200) {
        console.log('User updated successfully!');
        navigate('/home'); // Navigate to the "/home" route
      } else {
        console.error('Error during user update:', response.statusText);
      }
    } catch (error) {
      console.error('Error during user update:', error);
    }
  };
  return (
    <div className="d-flex justify-content-center align-item-center bg-primary vh-100">
     <div className="bg-white p-3 rounded col-sm-3 h-50 mt-5">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name:</label>
          <input type="text" name="name" value={user.name} onChange={handleChange}  className="form-control rounded-0" />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" name="email" value={user.email} onChange={handleChange}  className="form-control rounded-0" />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input type="password" name="password" value={user.password} onChange={handleChange}   className="form-control rounded-0"/>
        </div>
        <button type="submit" className="btn btn-success w-100 rounded-0">Update User</button>
      </form>
      </div>
    </div>
  );
};

export default UpdateUser;














// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {useNavigate, useParams } from 'react-router-dom';


// const EditUser = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const {id}=useParams();

//   useEffect(() => {
//     fetchUser();
//   }, [id]);

//   const fetchUser = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3001/update`+id);
//       console.log("id==================")
//       if (response.status === 200) {
//         const { name, email, password } = response.data;
//         setName(name);
//         setEmail(email);
//         setPassword(password);
//         console.log('========================',response.data)
//       } else {
//         console.error('Failed to fetch user:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error during user fetch:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`http://localhost:3001/update`+id, {
//         name,
//         email,
//         password
//       });
//       if (response.status === 200) {
//         console.log('User updated successfully!');
//       } else {
//         console.error('Error during user update:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error during user update:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Edit User</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <button type="submit">Update User</button>
//       </form>
//     </div>
//   );
// };

// export default EditUser;






// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import {useNavigate, useParams } from 'react-router-dom';



// const initData={
//     name:'',
//     email:'',
//     password:''
// }

//  const Update = () => {


//     const {id}=useParams();
//     const [values,setValues] =useState(initData)
//     const navigate =useNavigate();

//     useEffect(()=>{
//         axios.get('http://localhost:5000/update'+id)
//         .then(res =>{
//             console.log(res)
//             setValues({...values, name:res.data[0].name, email:res.data[0].email, password:res.data[0].password})
//         })
//         .catch(err => console.log(err))
//     },[])

//     const handleUpdate =(event)=>{
//         event.preventDefault();
//         axios.put(''+id,values)
//         .then(res=>{
//             console.log(res)
//             navigate ('/home')
//         }).catch(err => console.log(err));
//     }


//     return (
//         <div className='d-flex justify-content-center align-item-center bg-primary vh-100'>
//             <div className='bg-white p-3 rounded w-25'>
//                 <h2 className='text-center'>Update Data</h2>
//                 <form action=''onSubmit={handleUpdate}>
//                 <div className='mb-3'> 
//                         <label htmlFor='name'><strong> Name</strong></label>
//                         <input
//                         type='text'
//                         value={values.name}
//                         placeholder='Enter Name'
//                         className='form-control rounded-0'
//                         onChange={e=> setValues({...values,name:e.target.value})}
//                         />
//                     </div>
//                     <div className='mb-3'> 
//                         <label htmlFor='email'><strong> Email</strong></label>
//                         <input 
//                         type='email' 
//                         value={values.email}
//                         placeholder='Enter Email' 
//                         className='form-control rounded-0'
//                         onChange={e=> setValues({...values,email:e.target.value})}
//                         />
//                     </div>
//                     <div className='mb-3'> 
//                         <label><strong> Password</strong></label>
//                         <input 
//                         type='password' 
//                         value={values.password}
//                         placeholder='Enter password' 
//                         className='form-control rounded-0'
//                         onChange={e=> setValues({...values,password:e.target.value})}
//                         />
//                     </div>
//                     <button type='submit' className='btn btn-success w-100 rounded-0'>Update</button>
//                 </form>
//             </div>
//         </div>
//   )
// }

// export default Update;
