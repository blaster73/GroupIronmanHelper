import React from "react";

function Todo(props) {
  function deleteHandler() {
    console.log("Clicked Here");
    console.log(props.text);
  }

  const userAction = async () => {

    /*var express = require('express')
    var cors = require('cors')
    var app = express()
    
    app.use(cors())
    
    app.get('/products/:id', function (req, res, next) {
      res.json({msg: 'This is CORS-enabled for all origins!'})
    })
    
    app.listen(80, function () {
      console.log('CORS-enabled web server listening on port 80')
    })*/
    
    /*const response = await fetch('https://services.runescape.com/m=hiscore_oldschool/index_lite.ws?player=Killua_blast', {
      crossDomain:true,
      method: 'POST',
      headers: {'Content-Type':'application/csv'},
      body: Todo.stringify
    });*/

    fetch('https://services.runescape.com/m=hiscore_oldschool/index_lite.ws?player=Killua_blast')
    .then(response => response.json())
    .then(data => console.log(data));

    //const myCsv = await response.text;
    //console.log(myCsv);
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
