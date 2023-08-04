import React from 'react'

const Completed = () => {
  return (
    <div className="root">
      <h1>#todo</h1>
      <AddNewTodo onAddTodo={onAddNewTodoHandler} />
      <TodoList data={todoList} />
    </div>
  );
}

export default Completed