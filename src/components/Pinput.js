import React from "react";

function Pinput(props) {

  function getPlayer() {
    fetch("https://gimapi.azurewebsites.net/player?pid=Golemantium")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={getPlayer}>
          Get Player Stats
        </button>
        <input type="text" value="Player Name" />
      </div>
    </div>
  );
}

export default Pinput;
