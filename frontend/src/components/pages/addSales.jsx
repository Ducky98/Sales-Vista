import React, { useState } from "react";
import {
  TextField,
  Card,
  Button,
  InputLabel,
  Input,
  InputAdornment,
  FormControl
} from "@mui/material";

const AddSales = () => {
  const [productName, setProductName] = useState("");
  const [productQty, setProductQty] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform any action with the form data
    console.log("Product Name:", productName);
    console.log("Quantity:", productQty);
    console.log("Amount:", amount);
    // You can also make API calls or perform other operations here
  };

  return (
    <Card
      variant="outlined"
      className="max-w-96 mx-auto p-6 flex flex-col gap-6 items-center mt-16 shadow-xl"
    >
      <h2 className="text-xl font-bold">All Sales Entry🖊</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        <TextField
          id="productName"
          label="Product Name"
          variant="standard"
          className="w-full "
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <TextField
          id="productQty"
          label="Quantity"
          variant="standard"
          type="number"
          className="w-full "
          value={productQty}
          onChange={(e) => setProductQty(e.target.value)}
        />
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            type="number"
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          style={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}
        >
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default AddSales;
