import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './Signup';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/home');
      if (response.status === 200) {
        setUsers(response.data);
      } else {
        console.error('Failed to fetch users:', response.statusText);
      }
    } catch (error) {
      console.error('Error during user fetch:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/delete/${id}`);
      if (response.status === 200) {
        fetchUsers();
      } else {
        console.error('Failed to delete user:', response.statusText);
      }
    } catch (error) {
      console.error('Error during user deletion:', error);
    }
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-item-center">
      <div className="w-50 bg-white rounded p-3">
        <h2 className="text-center">User Data</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((signup_table) => (
              <tr key={signup_table.id}>
                <td>{signup_table.id}</td>
                <td>{signup_table.name}</td>
                <td>{signup_table.email}</td>
                <td>{signup_table.password}</td>
                <td>
                  <Link to={`/view/${signup_table.id}`} className="btn btn-sm btn-success mx-2">
                    View
                  </Link>
                  <Link to={`/update/${signup_table.id}`} className="btn btn-sm btn-primary mx-2">
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(signup_table.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;





// import React, { useEffect, useState } from 'react'
// import {useNavigate ,Link} from 'react-router-dom';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


//  const Home = () => {

//   const [data,setData] = useState([])
  
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchHome();
//   }, []);

//   const fetchHome = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/home');
//       if (response.ok) {
//         const data = await response.json();
//         setUsers(data);
//       } else {
//         console.error('Failed to fetch users:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error during user fetch:', error);
//     }
//   };
 
//   const handleDelete=(id)=>{
//     axios.delete('http://localhost:5000/delete/'+id)
//     .then(res => {
//       window.location.reload();
//     })
//     .catch(err => console.log(err));
//   }


//   return (
//     <div className='d-flex vh-100 bg-primary justify-content-center align-item-center'>
//       <div className='w-50 bg-white rounded p-3'>
//         <h2 className='text-center'>User Data</h2>
//         <table className='table'>
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Password</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((login,index)=>{
//               return <tr key={index}>
//                 <td>{login.id}</td>
//                 <td>{login.name}</td>
//                 <td>{login.email}</td>
//                 <td>{login.password}</td>
//                 <td>
//                   <Link to={`/view/${login.id}`} className='btn btn-sm btn-success mx-2'>View</Link>
//                   <Link to={`/update/${login.id}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
//                   <button className='btn btn-sm btn-danger ' onClick={()=>handleDelete(login.id)}>
//                     Delete
//                     </button>
//                 </td>
//               </tr>
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }
// export default Home;
