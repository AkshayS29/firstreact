import React from "react";

function Addbox({setTodo,handleSubmit,todo}){
    return(
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder = "Type here"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button title="add here" type="submit">Add</button>
        </form>
    )
}

export default Addbox;