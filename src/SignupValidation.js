export const validateSignupForm = (name, email, password) => {
    let errors = {};
  
    // Validate name
    if (!name) {
      errors.name = 'Name is required';
    }
  
    // Validate email
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
  
    // Validate password
    if (!password) {
      errors.password = 'Password is required';
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}/.test(password)) {
      errors.password = 'Password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long';
    }
  
    return errors;
  };
  
// const validation=(values)=>{
//     let error={}
//     const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/


//     if(values.name === ""){
//         error.name ="Name should not be empty"
//     }
//     else{
//         error.name=""
//     }


//     if(values.email === ""){
//         error.email ="Email should not be empty"
//     }
//     else if(!email_pattern.test(values.email)){
//         error.email="Email not match"
//     }
//     else{
//         error.email=""
//     }

//     if(values.password === ""){
//         error.password ="Password should not be empty"
//     }
//     else if(!password_pattern.test(values.password)){
//         error.password="Password not match"
//     }
//     else{
//         error.password=""
//     }
//     return error;

// }
// export default validation;