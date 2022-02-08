import React, { useState } from "react";
import Todoitem from "./Todoitem";

const Form = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([{}]);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setList((prev)=>{return[...prev,{label:task,done:false}]})
    setTask("");
  };
  let obtener = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/jucemalco").then((response) => response.json()).then((data) => setList(data))
}
  const onDelete = (item) => {
    const filteredTodoList = list.filter((todoItem) => {
      return todoItem !== item;
    });

    setList(filteredTodoList);
  };
  let actualizar = () => {
  fetch("https://assets.breatheco.de/apis/fake/todos/user/jucemalco", {
  "method": "PUT",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": JSON.stringify(list)
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});}
  return (
    <div className="form">
      <h1 className="title">TAREAS PARA HOY :D</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Qué necesitamos hacer?" 
          value={task}
          onChange={handleChange}
        />
      </form> 
      <button type="button" className="btn btn-primary" onClick={obtener}>Listar GUARDADO</button>
      <button type="button" className="btn btn-primary" onClick={actualizar}>Actualizar DATOS</button>
      <ul>
        {list.map((item, index) => {
          console.log(item);
          return <Todoitem todoitem={item.label} deleteTodo={onDelete} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default Form;