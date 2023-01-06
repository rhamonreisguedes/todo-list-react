import "./Item.css";
import { useState } from "react";

const Item = ({ todo, id }) => {
  const [checked, setChecked] = useState(false);
  const [delItem, setDelItem] = useState(false);


  const todoDone = (e) => {
    if(checked){
      setChecked(false)
    }else{
      setChecked(true)
    }
    console.log(e.target.id);
  };

  return (
    <div className={checked ? 'item-checked' : 'item'} id={id}>
      <input type="checkbox" className='btn-completed' onClick={todoDone} />
      <div className={checked ? 'todo-checked' : 'todo'}>{todo}</div>
      <input
        type="submit"
        className="btn-exclude"
        value="x"
        onClick={() => console.log("clicou")}
      />
    </div>
  );
};

export default Item;
