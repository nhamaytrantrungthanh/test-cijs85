import { useState } from "react";

const AddNewTodo = (props) => {
  const [todoTitle, setTodoTitle] = useState("");

  const onChangeHandler = (e) => {
    setTodoTitle(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      title: todoTitle,
      isCompleted: false,
    };

    props.onAddTodo(newTodo);
    setTodoTitle("");
  };

  //   const onDeleteStudentHandler = (id) => {
  //   const filteredStudentList = studentList.filter(
  //     (student) => student.id !== id
  //   );
  //   setStudentList(filteredStudentList);
  // };
  

  return (
    <form className="add-todo" onSubmit={onSubmitHandler}>
      <input className="search-form" type="text" placeholder="add details " value={todoTitle} onChange={onChangeHandler} />
      <button className="button-form"type="submit">Add</button>
      <button className="button-form-delete"type="submit">Delete</button>
      {/* <button className="button-form-delete"type="submit" onClick={() => this.handleDeleteTodo() }>Delete</button> */}
    </form>
  );
};

export default AddNewTodo;
