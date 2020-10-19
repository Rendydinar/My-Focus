import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos}) => {
  return (
  	<div className="todo-container">
  	  <ul className="todo-list">
  	  	{filteredTodos.map(todo => ( 
  	  	  <Todo 
  	  	  	setTodos={setTodos}
  	  	    text={todo.text} 
  	  	    id={todo.id} 
  	  	    key={todo.id} 
  	  	    todo={todo}
  	  	    todos={todos}
  	  	  />
  	  	))}
	  </ul>
  	</div>
  );
}

export default TodoList;