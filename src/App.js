import React from "react";
import Todo from "./components/Todo";
import Pinput from "./components/Pinput";

function App() {
  return (
    <div>
      <h1>Group Ironman</h1>
        <Todo text='Debug Info' />
        <Pinput />
    </div>
  );
}

export default App;

//  const value = 'near you!';
//return <div>This is a Group Ironman Helper, coming to an Old School Runescape {value}</div>;
