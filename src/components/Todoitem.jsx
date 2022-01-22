import React from "react";

const Todoitem = (props) => {
  const handleDelete = () => {
    props.deleteTodo(props.todoitem);
  };
//console.log(proptodoitem);//

  return (
    <li>
      {props.todoitem}{" "}
      <button className="boton" onClick={handleDelete}>
        x
      </button>{" "}
    </li>
  );
};

export default Todoitem;