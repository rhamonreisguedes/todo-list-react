import "./Form.css";
import Item from "./Item";
import { useState } from "react";

const Form = () => {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const [id, setId] = useState(0);

  const addTodo = (text) => {
    const todo = { text: text, id: id };
    setList([...list, todo]);
    setId(id + 1);
    setText('');
  };

  const deleteTodo = (id) => {
    const filteredList = list.filter((item) => item.id !== id);
    setList(filteredList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(window. innerHeight);

  return (
    <div>
      <div id="root"></div>
      <form onSubmit={handleSubmit}>
        {list.map((todo, key) => (
          <div key={key}>
            <Item todo={todo} deleteTodo={deleteTodo}/>
          </div>
        ))}
        <input
          className="form"
          type="text"
          name="item"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Digite sua próxima tarefa"
          maxLength={window. innerHeight > 500 ? 35 : 15}
        />
        {text === '' && (
          <input
            type="submit"
            value="Adicionar"
            className="btn-add-disabled"
            disabled
          />
        )}
        {text !== '' && (
          <input
            type="submit"
            value="Adicionar"
            className="btn-add"
            onClick={() => addTodo(text)}
          />
        )}
      </form>
    </div>
  );
};

export default Form;
