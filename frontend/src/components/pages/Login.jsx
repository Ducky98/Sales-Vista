import React from 'react'
import {TextField, FormControlLabel, Checkbox, Button} from '@mui/material';
import { Avatar } from "@material-tailwind/react";
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className='max-w-md mx-auto bg-white m-10 rounded p-6'>
      <div className='h-12 w-12 mx-auto'>

      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" className='rounded-full' alt="avatar" />
      </div>
      <h2 className='text-2xl text-center font-medium mb-6'>Sign in</h2>
      <form className='flex flex-col gap-5'>
      <TextField
          required
          id="outlined-required"
          label="Email Address"
          variant="outlined"
          className='w-full'
        />
      <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          className='w-full'
        />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
        <Button type='submit' variant="contained"><b  style={{fontFamily: '"Roboto", sans-serif'}}>Sign In</b></Button>
        <div className='flex justify-between font-normal text-[0.875rem] text-blue-600' style={{fontFamily: '"Roboto", sans-serif'}}>
        <Link to="/signup" className='hover:underline'>Forgot password?</Link>
        <Link to="/signup" className='hover:underline'>Don't have an account? Sign Up</Link>
        </div>
      </form>
    </div>
  )
}

export default Login
