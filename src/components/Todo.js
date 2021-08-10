import React from "react";

function Todo(props) {
  /*function deleteHandler() {
    console.log("Clicked Here");
    console.log(props.text);
  }*/

  function deleteHandler() {
    fetch("https://gimapi.azurewebsites.net/player?pid=Golemantium")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Console Log
        </button>
      </div>
    </div>
  );
}

export default Todo;
