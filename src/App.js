import React from "react";
import Cards from "./Components/Cards/Cards";
import Chart from "./Components/Chart/Chart";
import CountrySelector from "./Components/CountrySelector/CountrySelector";
import styles from "./App.module.css";
import { fetchData } from "./api/api";
import CoronaImage from "./Image/image1.png";

class App extends React.Component {
  state = {
    data: {},
    country: ""
  };

  fetchedDataAPI = async country => {
    if (country !== 0) {
      const fetchedData = await fetchData(country);
      this.setState({ data: fetchedData, country: country });
    } else {
      const fetchedData = await fetchData();
      this.setState({ data: fetchedData });
    }
  };

  // when app initializes componentDidMount fetches the Global Data
  componentDidMount() {
    this.fetchedDataAPI();
    // const fetchedData = await fetchData();
    // this.setState({ data: fetchedData });
  }

  //When the user changes the searchField value to country
  // calling the fetching the data of country based on the
  // country picked by the user.
  handleCountryChange = country => {
    this.fetchedDataAPI(country);
    // console.log("country", country);
    // const fetchedData = await fetchData(country);
    // this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { country, data } = this.state;

    return (
      <div className={styles.container}>
        <img src={CoronaImage} alt="corona-19" className={styles.image} />
        <Cards data={data} />
        <CountrySelector handleCountry={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
