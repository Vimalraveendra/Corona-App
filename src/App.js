import React from "react";
import Card from "./Components/Card/Card";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Corona App</h1>
        <Card />
      </div>
    );
  }
}

export default App;
