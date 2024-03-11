import React, { useState } from "react";
import { TextField, Card, Button, FormControl, InputLabel, Input, InputAdornment } from "@mui/material";
import axios from "axios"; // Import axios

const AddSales = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productQty: "",
    amount: "",
    id: ""
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    setFormData({ ...formData, id: localStorage.getItem("loginEmail") });
    event.preventDefault();
    try {
      console.log(formData)
      const response = await axios.post("http://localhost:5000/api/sales", formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("tokenDetail")}` },
      });

      if (response.status !== 201) {
        throw new Error("Failed to save sales entry");
      }

      console.log("Sales entry saved successfully!");
      setFormData({ productName: "", productQty: "", amount: "" }); // Clear form after success
    } catch (error) {
      console.error("Error saving sales entry:", error);
    }
  };

  return (
    <Card
      variant="outlined"
      className="max-w-96 mx-auto p-6 flex flex-col gap-6 items-center mt-16 shadow-xl"
    >
      <h2 className="text-xl font-bold">All Sales Entry</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        <TextField
          id="productName"
          label="Product Name"
          variant="standard"
          className="w-full"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
        />
        <TextField
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
            id="standard-adornment-amount"
            type="number"
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </FormControl>
        <Button type="submit" variant="contained" style={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}>
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default AddSales;
