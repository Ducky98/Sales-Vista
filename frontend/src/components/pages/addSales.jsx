import React, { useState } from "react";
import { TextField, Card, Button, FormControl, InputLabel, Input, InputAdornment } from "@mui/material";
import axios from "axios"; // Import axios for making HTTP requests

const AddSales = () => {
  // Initialize state for form data and sale status message
  const initialFormData = {
    productName: "",
    productQty: "",
    amount: "",
  };
  const [formData, setFormData] = useState(initialFormData); // State for form data
  const [saleStatus, setSaleStatus] = useState(""); // State for sale status message

  // Function to handle form input changes
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      // Send POST request to add sale data
      const res = await axios.post("http://localhost:8080/api/sales", formData, {
        withCredentials: true, // Include credentials with the request
      });

      // Check if sale was successfully added
      if (res.data.message === "Sale added" && res.status === 201) {
        // Update sale status message and reset form data
        setSaleStatus("Sale data added successfully");
        setFormData(initialFormData);
      }
    } catch (error) {
      // Handle errors from server response
      if (error.response) {
        const { status } = error.response;
        switch (status) {
          case 401:
            setSaleStatus("Bad Request"); // Handle unauthorized access
            break;
          default:
            setSaleStatus("Internal Server Error"); // Handle other server errors
            break;
        }
      } else {
        setSaleStatus("Internal Server Error"); // Handle unexpected errors
      }
    }
  };

  // Function to handle form reset
  const handleReset = () => {
    setFormData(initialFormData); // Reset form data
    setSaleStatus(""); // Clear sale status message
  };

  return (
    <Card
      variant="outlined"
      className="max-w-96 mx-auto p-6 flex flex-col gap-6 items-center mt-16 shadow-xl"
    >
      <h2 className="text-xl font-bold">All Sales Entry</h2>
      {/* Form for adding sales */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        <TextField
          required
          id="productName"
          label="Product Name"
          variant="standard"
          className="w-full"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
        />
        <TextField
          required
          id="productQty"
          label="Quantity"
          variant="standard"
          type="number"
          className="w-full"
          name="productQty"
          value={formData.productQty}
          onChange={handleChange}
        />
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            required
            id="standard-adornment-amount"
            type="number"
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </FormControl>
        {/* Buttons for form submission and reset */}
        <div className="flex justify-between items-center">
          <Button type="submit" variant="contained" style={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}>
            Submit
          </Button>
          <Button variant="outlined" onClick={handleReset}>
            Reset
          </Button>
        </div>
        {/* Display sale status message */}
        <div>{saleStatus}</div>
      </form>
    </Card>
  );
};

export default AddSales;
