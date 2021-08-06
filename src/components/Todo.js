import React from "react";

function Todo(props) {
  /*function deleteHandler() {
    console.log("Clicked Here");
    console.log(props.text);
  }*/

  const userAction = async () => {
    fetch('https://services.runescape.com/m=hiscore_oldschool/index_lite.ws?player=Killua_blast')
    .then(response => response.json())
    .then(data => console.log(data));
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={userAction}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
