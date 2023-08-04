import React from 'react'
import 
const All = () => {
  return (
    <div className="root">
      <h1>#todo</h1>
      <AddNewTodo onAddTodo={onAddNewTodoHandler} />
      <TodoList data={todoList} />
    </div>
  );
}

export default All