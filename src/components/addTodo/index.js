import React from "react";
import { TextField, Button } from "@mui/material";

function AddTodo(params) {
  return <>
    <form onSubmit={params.onSubmit}>
      <TextField     
        id="standard-basic" 
        variant="filled" 
        type="text" 
        name="name" 
      />
      <Button variant="outlined" type="submit">Add</Button>
    </form>
  </>
}

export default AddTodo;