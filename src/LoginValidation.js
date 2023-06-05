
const validateLoginForm = (email, password) => {
    const errors = {};
  
    // Email validation
    if (!email) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email format';
    }
  
    // Password validation
    if (!password) {
      errors.password = 'Password is required';
    } else if (!isValidPassword(password)) {
      errors.password =
        'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one digit';
    }
  
    return errors;
  };
  
  // Helper function to validate email format
  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Helper function to validate password format
  const isValidPassword = (password) => {
    // Regular expression for password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    return passwordRegex.test(password);
  };
  
  export default validateLoginForm;
  
  

// const validation=(values)=>{
//     let error={}
//     const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

//     if(values.email === ""){
//         error.email ="Email should not be empty"
//     }
//     else if(!email_pattern.test(values.email)){
//         error.email="Enail not match"
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