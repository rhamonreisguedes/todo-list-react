import "./Form.css";
import Item from "./Item";
import { useState } from "react";

const Form = () => {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);
  // const [id, setId] = useState(0);

  const handleTodo = (e) => {
    setTodo(e.target.value)
    console.log(todo);
  }

  const handleList = () => {
    setList([...list, todo]);
    // setId(id + 1);
    console.log(list);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {list.map((todo, key) => <Item key={key} todo={todo}/>)}
        <input
          className="form"
          type="text"
          name="item"
          onChange={handleTodo}
          placeholder='Digite sua próxima tarefa'
          maxLength={35}
        />
        <input type='submit' value='Adicionar' className="btn-add" onClick={handleList}/>
      </form>
    </div>
  );
};


export default Form;
