import React from "react";
import Cards from "./Components/Cards/Cards";
import Chart from "./Components/Chart/Chart";
import CountrySelector from "./Components/CountrySelector/CountrySelector";
import styles from "./App.module.css";
import { fetchData } from "./api/api";

class App extends React.Component {
  state = {
    data: {},
    country: ""
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async country => {
    console.log("country", country);
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData });
  };
  render() {
    console.log("covid", this.state.data);
    return (
      <div className={styles.container}>
        <h1>Corona App</h1>
        <Cards data={this.state.data} />
        <CountrySelector handleCountry={this.handleCountryChange} />
        <Chart />
      </div>
    );
  }
}

export default App;
