import React from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  React.useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("added");

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false, 
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    console.log("deleted");
  }


  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
        console.log("edited");
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
<div className="main_div">
<div className="center_div">   
    <div id="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button title="add here" type="submit">Add</button>
        
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <div className="todo-text">
              
           
            {todo.id === todoEditing ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div>{todo.text}</div>
            )}
          </div>
          <div className="todo-actions">
            {todo.id === todoEditing ? (
              <button title="submit here" onClick={() => submitEdits(todo.id)}>Sub</button>
            ) : (
              <button title="edit here" onClick={() => setTodoEditing(todo.id)}>Edt</button>
            )}

            <button title="delete here" onClick={() => deleteTodo(todo.id)}>Dlt</button>
          </div>
        </div>
      ))}
    </div>
</div>
</div>    
  );
};

export default App;
