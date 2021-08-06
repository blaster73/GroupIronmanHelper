import React from "react";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>Group Ironman</h1>
        <Todo text='Create Web App' />
        <Todo text='Start React Code' />
        <Todo text='Make Website Content...' />
    </div>
  );
}

export default App;

//  const value = 'near you!';
//return <div>This is a Group Ironman Helper, coming to an Old School Runescape {value}</div>;
