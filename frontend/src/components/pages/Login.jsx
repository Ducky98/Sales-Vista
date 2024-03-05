import React, { useState, useEffect } from 'react';
import {TextField, FormControlLabel, Checkbox, Button} from '@mui/material';
import { Avatar } from "@material-tailwind/react";
import {Link} from 'react-router-dom';

const Login = () => {
  // State variables for email, password, and remember me checkbox
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Load remembered email from local storage when component mounts
  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, []);

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    // Remember email if "Remember Me" is checked
    if (rememberMe) {
      localStorage.setItem('rememberedEmail', email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }

    // Perform further actions such as sending data to a server
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
          className='w-full'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          className='w-full'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
          label="Remember me"
        />
        <Button type='submit' variant="contained"><b style={{fontFamily: '"Roboto", sans-serif'}}>Sign In</b></Button>
        <div className='flex justify-between font-normal text-[0.875rem] text-blue-600' style={{fontFamily: '"Roboto", sans-serif'}}>
          <Link to="/signup" className='hover:underline'>Forgot password?</Link>
          <Link to="/signup" className='hover:underline'>Don't have an account? Sign Up</Link>
        </div>
      </form>
    </div>
  )
}

export default Login;
