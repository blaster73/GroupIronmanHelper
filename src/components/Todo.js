import React from "react";

function Todo(props) {
  /*function deleteHandler() {
    console.log("Clicked Here");
    console.log(props.text);
  }*/

  function deleteHandler() {
    //const { hiscores } = require("osrs-json-api");
    //hiscores.getPlayer("B0aty").then(console.log).catch(console.error);

    fetch("index_lite.ws?player=Killua_blast")
      .then((response) => response.text())
      .then((data) => console.log(data));
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
