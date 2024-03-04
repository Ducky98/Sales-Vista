import React from "react";
import {
  TextField,
  Card,
  Button,
  InputLabel,
  Input,
  InputAdornment,
  FormControl
} from "@mui/material";

const addSales = () => {
  return (
    <Card
      variant="outlined"
      className="max-w-96 mx-auto p-6 flex flex-col gap-6 items-center mt-16 shadow-xl"
    >
      <h2 className="text-xl font-bold">All Sales Entry🖊</h2>
      <TextField
        id="standard-basic"
        label="Product Name"
        variant="standard"
        className="w-full "
      />
      <TextField
        id="standard-basic"
        label="Quantity"
        variant="standard"
        type="number"
        className="w-full "
      />
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
        <Input
          id="standard-adornment-amount"
          startAdornment={<InputAdornment position="start">₹</InputAdornment>}
        />
      </FormControl>
      <Button
        variant="contained"
        style={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}
      >
        Submit
      </Button>
    </Card>
  );
};

export default addSales;
