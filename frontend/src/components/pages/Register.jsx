import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { Avatar } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const SignUp = () => {
  const[data, setData] = useState({
    firstName: "",
    lastName:"",
    email:"",
    password:""
  });
  const navigate = useNavigate();
  const[error, setError] = useState("")
  const handleChange = ({currentTarget:input})=>{
    setData({...data, [input.name]:input.value});
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:5000/api/user';
       await axios.post(url, data);
      navigate('/login')
      // console.log(res.message);
    } catch (error) {
      if(error.response && 
        error.response.status >= 400 && error.response.status <= 500){
          setError(error.response.data.message);
        }
    }
    
  };

  return (
    <div className="max-w-md mx-auto bg-white m-10 rounded p-6">
      <div className="h-12 w-12 mx-auto">
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          className="rounded-full"
          alt="avatar"
        />
      </div>
      <h2 className="text-2xl text-center font-medium mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              required
              id="outlined-firstname"
              label="First Name"
              variant="outlined"
              name="firstName"
              className="w-full"
              value={data.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-lastname"
              label="Last Name"
              variant="outlined"
              name="lastName"
              className="w-full"
              value={data.lastName}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <TextField
          required
          id="outlined-email"
          label="Email Address"
          variant="outlined"
          name="email"
          className="w-full"
          value={data.email}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          className="w-full"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">
          <b style={{ fontFamily: '"Roboto", sans-serif' }}>Sign Up</b>
        </Button>
        {error && <div className="text-red-950">{error}</div>}
        <div
          className="flex justify-between font-normal text-[0.875rem] text-blue-600"
          style={{ fontFamily: '"Roboto", sans-serif' }}
        >
          <Link to="/login" className="hover:underline">
            Already have an account? Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
