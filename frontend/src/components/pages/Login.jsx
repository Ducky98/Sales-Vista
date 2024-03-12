import React, { useState, useContext } from "react";
import { TextField, Button } from "@mui/material";
import { Avatar } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { loginContext } from '../../App';

/**
 * Component for user login.
 */
const Login = () => {
  const { loggedIn, setLoggedIn } = useContext(loginContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  /**
   * Function to handle form input changes.
   * @param {object} e - Event object
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /**
   * Function to handle form submission.
   * @param {object} e - Event object
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/auth", formData, {
        withCredentials: true,
      });

      if (response.status === 200) {
        setLoggedIn(true);
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {!loggedIn ? (
        <div className="max-w-md mx-auto bg-white m-10 rounded p-6">
          <div className="h-12 w-12 mx-auto">
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              className="rounded-full"
              alt="avatar"
            />
          </div>
          <h2 className="text-2xl text-center font-medium mb-6">Sign in</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <TextField
              required
              id="outlined-required"
              label="Email Address"
              variant="outlined"
              name="email"
              className="w-full"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              name="password"
              className="w-full"
              value={formData.password}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained">
              <b style={{ fontFamily: '"Roboto", sans-serif' }}>Sign In</b>
            </Button>
            {error && <div className="text-red-950">{error}</div>}
            <div className="flex justify-between font-normal text-[0.875rem] text-blue-600" style={{ fontFamily: '"Roboto", sans-serif' }}>
              <Link to="/signup" className="hover:underline">Forgot password?</Link>
              <Link to="/signup" className="hover:underline">Don't have an account? Sign Up</Link>
            </div>
          </form>
        </div>
      ) : (
        navigate('/')
      )}
    </>
  );
};

export default Login;
