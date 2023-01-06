import "./Form.css";
import Item from "./Item";
import { useState } from "react";

const Form = () => {
  const [todo, setTodo] = useState();
  const [list, setList] = useState([]);
  const [id, setId] = useState(0);


  const handleList = () => {
    setList([...list, todo]);
    setId(id + 1);
    console.log(list)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {list.map((todo, key) => (
          <Item key={key} todo={todo} id={id} />
        ))}
        <input
          className="form"
          type="text"
          name="item"
          onChange={(e) => (setTodo(e.target.value))}
          placeholder="Digite sua próxima tarefa"
          maxLength={35}
        />
        {todo === "" && (
          <input
            type="submit"
            value="Adicionar"
            className="btn-add-disabled"
            disabled
          />
        )}
        {todo !== "" && (
          <input
            type="submit"
            value="Adicionar"
            className="btn-add"
            onClick={handleList}
          />
        )}
      </form>
    </div>
  );
};

export default Form;
