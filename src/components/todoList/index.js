import React from "react";
import "./TodoList.css";
import { TableRow, TableCell, Button } from "@mui/material";

function TodoList(params) {
  return (
    <>
      {params.todos.map((todo) => {
        return (
          <TableRow key={todo.id} className="item">
            <TableCell className="TableCell">
              <p> {todo.name} </p>
            </TableCell>
            <TableCell className="TableCell">
              <Button
                variant="contained"
                onClick={() => params.onDelete(todo.id)}
              >
                Delete
              </Button>
            </TableCell>
            <TableCell className="TableCell">
              <Button variant="contained" onClick={() => params.onEdit(todo)}>
                Edit
              </Button>
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
}

export default TodoList;
