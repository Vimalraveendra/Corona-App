import React from "react";
import Cards from "./Components/Cards/Cards";
import styles from "./App.module.css";
import { fetchData } from "./api/api";

class App extends React.Component {
  state = {
    covidData: {}
  };
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ covidData: data });
  }
  render() {
    console.log("covid", this.state.covidData);
    return (
      <div className={styles.container}>
        <h1>Corona App</h1>
        <Cards data={this.state.covidData} />
      </div>
    );
  }
}

export default App;
