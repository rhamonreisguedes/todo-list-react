import "./Item.css";
import { useState } from "react";

const Item = ({ todo, deleteTodo }) => {
  const [checked, setChecked] = useState(false);

  const todoDone = () => {
    if(checked){
      setChecked(false)
    }else{
      setChecked(true)
    }
  };

  return (
    <div className={checked ? 'item-checked' : 'item'}>
      <input type="checkbox" className='btn-completed' onClick={todoDone} />
      <div className={checked ? 'todo-checked' : 'todo'}>
          <span>{todo.text}</span>
      </div>
      <input
        type="submit"
        className="btn-exclude"
        value="x"
        onClick={() => deleteTodo(todo.id)}
      />
    </div>
  );
};

export default Item;
