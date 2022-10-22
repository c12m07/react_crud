import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function EditTodo(params) {

  const [value, setValue] = useState(params.item.name);

  function onChange(e) {
    setValue(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    params.onSubmitEdit({ id: params.item.id, name: value });
  }
  
  return <>
    <form onSubmit={onSubmit}>
      <TextField 
        id="standard-basic" 
        variant="filled" 
        type="text" 
        name="name" 
        value={value} 
        onChange={onChange} 
      />
      <Button type="submit" variant="outlined">Edit</Button>
    </form>
    <Button variant="outlined" onClick={params.onCancel}>Cancel</Button>
  </>
}

export default EditTodo;