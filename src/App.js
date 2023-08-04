import { useState } from "react";
import "./App.css";
import AddNewTodo from "./components/AddNewTodo";
import TodoList from "./components/TodoList";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import All from './pages/Active.js'
// import All from './pages/All.js'
// import All from './pages/Completed.js'

const todoListData = [
  {
    isCompleted: true,
    title: "Do coding challenges",
  },
  {
    isCompleted: false,
    title: "Do coding challenges",
  },
  {
    isCompleted: false,
    title: "Do coding challenges",
  },
];

function App() {
  const [todoList, setTodoList] = useState(todoListData);

  const onAddNewTodoHandler = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    // <BrowserRouter>
      <>
      {/* All */}
        <div className="root">
          <h1>#todo</h1>
          <ul className="all-active-complete">
            <h3>All</h3>
            <h3>Active</h3>
            <h3>Completed</h3>
          </ul>
          <hr />
          {/* <Route>
            <Route path="/" element={<All />} />
            <Route path="/login" element={<Active />} />
            <Route path="/login" element={<Completed />} />
          </Route> */}
          <AddNewTodo onAddTodo={onAddNewTodoHandler} />
          <TodoList data={todoList} />
        </div>
        {/* Active */}
        <div className="root">
          <h1>#todo</h1>
          <ul className="all-active-complete">
            <h3>All</h3>
            <h3>Active</h3>
            <h3>Completed</h3>
          </ul>
          <hr />
          {/* <Route>
            <Route path="/" element={<All />} />
            <Route path="/login" element={<Active />} />
            <Route path="/login" element={<Completed />} />
          </Route> */}
          <AddNewTodo onAddTodo={onAddNewTodoHandler} />
          <TodoList data={todoList} />
        </div>
        {/* Complete */}
        <div className="root">
          <h1>#todo</h1>
          <ul className="all-active-complete">
            <h3>All</h3>
            <h3>Active</h3>
            <h3>Completed</h3>
          </ul>
          <hr />
          {/* <Route>
            <Route path="/" element={<All />} />
            <Route path="/login" element={<Active />} />
            <Route path="/login" element={<Completed />} />
          </Route> */}
          <AddNewTodo onAddTodo={onAddNewTodoHandler} />
          <TodoList data={todoList} />
        </div>
      </>
    // </BrowserRouter>
  );
}

export default App;
