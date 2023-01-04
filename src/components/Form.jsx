import "./Form.css";
import Item from "./Item";
import { useState } from "react";

const Form = () => {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);
  const [id, setId] = useState(0);

  const handleTodo = (e) => {
    // setTodo(e.target.value);
    handleId();
    setTodo({todo: e.target.value, id: id})
    console.log(todo);
  }

  const handleList = () => {
    setList(list.concat(todo));
    console.log(list);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleId = () => {
    setId(id + 1);
    console.log(id)
  }

  console.log(list)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {list.map((item, key) => <Item key={key} text={item.todo} id={item}/>)}
        <input
          className="form"
          type="text"
          name="item"
          onChange={handleTodo}
        />
        <input type='submit' value='ADD' onClick={handleList}/>
      </form>
    </div>
  );
};


export default Form;
