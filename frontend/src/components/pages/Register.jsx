import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { Avatar } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState({ firstName: '', lastName: '' });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    
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
              className="w-full"
              value={name.firstName}
              onChange={(e) => setName({ ...name, firstName: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-lastname"
              label="Last Name"
              variant="outlined"
              className="w-full"
              value={name.lastName}
              onChange={(e) => setName({ ...name, lastName: e.target.value })}
            />
          </Grid>
        </Grid>
        <TextField
          required
          id="outlined-email"
          label="Email Address"
          variant="outlined"
          className="w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          className="w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained">
          <b style={{ fontFamily: '"Roboto", sans-serif' }}>Sign Up</b>
        </Button>
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
