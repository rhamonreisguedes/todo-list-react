import "./Form.css";
import Item from "./Item";
import { useState } from "react";

const Form = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [id, setId] = useState(0);
  const [edit, setEdit] = useState(false);
  const [idReceived, setIdReceived] = useState(null);

  const addTodo = (text) => {
    const todo = { text: text, id: id };
    setList([...list, todo]);
    setId(id + 1);
    setText("");
  };

  const deleteTodo = (id) => {
    const filteredList = list.filter((item) => item.id !== id);
    setList(filteredList);
  };

  const editText = (textSended, idSended) => {
    setText(textSended);
    setIdReceived(idSended);
    setEdit(true);
  };

  const handleEdit = () => {
    setText(text);
    const itemEdit = { text: text, id: idReceived };
    const index = list.findIndex((item) => item.id === idReceived);
    list.splice(index, 1, itemEdit);
    console.log(list);
    setEdit(false);
    setText("");
    setIdReceived(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div id="root"></div>
      <form onSubmit={handleSubmit}>
        {list.map((todo, key) => (
          <div key={key}>
            <Item todo={todo} deleteTodo={deleteTodo} editText={editText} />
          </div>
        ))}
        <input
          className="form"
          type="text"
          name="item"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Digite sua próxima tarefa"
          maxLength={window.innerHeight > 500 ? 35 : 15}
        />
        {text === "" && (
          <input
            type="submit"
            value={edit ? "Editar" : "Adicionar"}
            className="btn-add-disabled"
            disabled
          />
        )}
        {text !== "" && (
          <input
            type="submit"
            value={edit ? "Editar" : "Adicionar"}
            className="btn-add"
            onClick={edit ? () => handleEdit() : () => addTodo(text)}
          />
        )}
      </form>
    </div>
  );
};

export default Form;
