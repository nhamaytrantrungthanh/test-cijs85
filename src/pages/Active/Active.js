import React from 'react'

const Active = () => {
  return (
    <div className="root">
      <h1>#todo</h1>
      <AddNewTodo onAddTodo={onAddNewTodoHandler} />
      <TodoList data={todoList} />
    </div>
  );
}

export default Active