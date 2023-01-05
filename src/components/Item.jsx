import "./Item.css";

const Item = ({ todo }) => {
  // let clicked = false;

  const todoDone = (e) => {
    // const text = document.querySelector("item");
    // const item = document.querySelector("todo");

    // console.log(text);
    // console.log(item);


    // console.log(e.target.parent);
    // if (clicked) {
    //   text.style.textDecoration = "";
    //   item.style.backgroundColor = "white";
    //   clicked = false;
    // } else {
    //   text.style.textDecoration = "line-through";
    //   item.style.backgroundColor = "#E9D66B";
    //   clicked = true;
    // }

    console.log('clicou')
  };

  return (
    <div className="item">
      <input type="checkbox" className="btn-completed" onClick={todoDone} />
      <div className="todo">{todo}</div>
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
