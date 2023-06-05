import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const View = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/view/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container" style={{marginTop:"150px"}}>
      <div className="container border border-danger
            col-sm-offset-3 col-sm-4 mt-4"
            style={{backgroundColor:"#0B0B45", borderRadius:"20px"}}>

      <h2 className="text-center text-warning mt-3">User Details</h2>
      <h4  className="text-center text-white "><span className="text-center text-warning">ID:</span> {user.id}</h4>
      <h4  className="text-center text-white "><span className="text-center text-warning ">Name:</span> {user.name}</h4>
      <h4  className="text-center text-white "><span className="text-center text-warning ">Email:</span> {user.email}</h4>
      <h4  className="text-center text-white "><span className="text-center text-warning">Password:</span> {user.password}</h4>
      <Link to="/home" className='text-decoration-non'>Back</Link>
      </div>
    </div>
  );
};

export default View;





//  import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// const View = () => {

//     const {id} =useParams();
//     const [login,setLogin]=useState([])
//     useEffect(()=>{
//         axios.get('http://localhost:5000/view'+id)
//         .then(res =>{
//             console.log(res)
//             setLogin(res.data[0]);
//         })
//         .catch(err => console.log(err))
//     },[])


//   return (
//     <div className='d-flex vh-100 bg-primary justify-content-center align-item-center'>
//         <div className='w-30 bg-white rounded p-3'>
//             <div className='p-2'>
//                 <h2 className='text-center'>Detail</h2>
//                 <h2>Id:-<span className='text-center'>{login.id}</span></h2>
//                 <h2>Name:-<span className='text-center'>{login.name}</span></h2>
//                 <h2>Email:-<span className='text-center'>{login.email}</span></h2>
//                 <h2>Password:-<span className='text-center'>{login.password}</span></h2>
//             </div>
//             <Link to="/home" className='btn btn-primary'>Back</Link>
//         </div>
//     </div>
//   )
// }

// export default View;
