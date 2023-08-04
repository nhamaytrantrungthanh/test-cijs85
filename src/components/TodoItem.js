const TodoItem = (props) => {
    const { isCompleted, title } = props;
    // JSX
    return (
      <div
        style={{
          padding: "10px",

          marginBottom: "8px",
          display: "flex",
          borderRadius: "8px",
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
        <input type="checkbox" checked={isCompleted} />
        <p>{title}</p>
      </div>
    );
  };
  
  export default TodoItem;
  