import React from "react";

function Task({todoEditing,setEditingText,submitEdits,setTodoEditing,deleteTodo,todo}){
    return(
        <div key={todo.id} className="todo">
          <div className="todo-text">
              
           
            {todo.id === todoEditing ? (
              <input
                type="text"
                placeholder = "Edit here"
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
    )
}

export default Task;