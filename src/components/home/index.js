import { useEffect, useState } from "react";
import TodoList from "../todoList";
import AddTodo from "../addTodo";
import EditTodo from "../editTodo";
import TodoService from "../../services/todoService";
import useTodo from "../../hooks/useTodo";
import { TableContainer, Table, TableBody, } from "@mui/material";

function Home(props) {
  const { todos, setTodos, addTodo, editTodo, deleteTodo } = useTodo();
  const [edit, setEdit] = useState(false);
  const [editedTodo, setEditTodo] = useState({});
  const todoService = new TodoService();

  function getTodos() {
    todoService.getTodos(props.email).then((res) => {
      setTodos(res);
    });
  }

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    todoService
      .addTodo({ 
        name: name, 
        description: "soy dummy" 
      })
      .then((res) => {
        console.log(res);
        addTodo(res);
      });
    e.target.reset();
  }

  function onEdit(todo) {
    setEdit(true);
    setEditTodo(todo);
  }

  function onSubmitEdit(editedTodo) {
    editTodo(editedTodo);
    setEdit(false);
    setEditTodo({});
  }

  function onDelete(id) {
    deleteTodo(id);
  }

  return (
    <div className="App">
      <div className="section">
        <div>
          <h1>Actividades</h1>
          <TableContainer>
            <Table
              sx={{ minWidth: 100, marginBottom: 10 }}
              aria-label="simple table"
            >
              <TableBody>
                <TodoList todos={todos} onDelete={onDelete} onEdit={onEdit} />
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div className="AddEdit">
          {edit ? (
            <EditTodo
              item={editedTodo}
              onSubmitEdit={onSubmitEdit}
              onCancel={() => setEdit(false)}
            />
          ) : (
            <AddTodo onSubmit={onSubmit} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
