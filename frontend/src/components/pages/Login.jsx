import React, { useState } from 'react';
import {TextField, Button} from '@mui/material';
import { Avatar } from "@material-tailwind/react";
import {Link} from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  // State variables for email, password, and remember me checkbox
  const [login, setlogin] = useState({
    email:"",
    password:""
  });
  const handleChange = ({currentTarget:input})=>{
    setlogin({...login, [input.name]:input.value});
  } 
  const[error, setError] = useState("")


  

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:5000/api/auth';
      const{ data :res} = await axios.post(url, login);

      localStorage.setItem("tokenDetail", res.data);
      localStorage.setItem("loginEmail", login.email);

      window.location = '/';
    } catch (error) {
      if(error.response && 
        error.response.status >= 400 && error.response.status <= 500){
          setError(error.response.data.message);
        }
    }
    
  }

  return (
    <div className='max-w-md mx-auto bg-white m-10 rounded p-6'>
      <div className='h-12 w-12 mx-auto'>
        <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" className='rounded-full' alt="avatar" />
      </div>
      <h2 className='text-2xl text-center font-medium mb-6'>Sign in</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <TextField
          required
          id="outlined-required"
          label="Email Address"
          variant="outlined"
          name='email'
          className='w-full'
          value={login.email}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          className='w-full'
          value={login.password}
          onChange={handleChange}
        />
        <Button type='submit' variant="contained"><b style={{fontFamily: '"Roboto", sans-serif'}}>Sign In</b></Button>
        {error && <div className="text-red-950">{error}</div>}
        <div className='flex justify-between font-normal text-[0.875rem] text-blue-600' style={{fontFamily: '"Roboto", sans-serif'}}>
          <Link to="/signup" className='hover:underline'>Forgot password?</Link>
          <Link to="/signup" className='hover:underline'>Don't have an account? Sign Up</Link>
        </div>
      </form>
    </div>
  )
}

export default Login;
