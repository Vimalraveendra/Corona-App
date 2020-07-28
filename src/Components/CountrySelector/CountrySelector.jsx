import React, { useState, useEffect } from "react";
import { Select, FormControl } from "@material-ui/core";
import { fetchCountryData } from "../../api/api";
import styles from "./CountrySelector.module.css";

const CountrySelector = ({ handleCountry }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchCountryAPI = async () => {
      setFetchedCountries(await fetchCountryData());
    };

    fetchCountryAPI();
  }, [setFetchedCountries]);
  console.log("I am getting called ");
  return (
    <FormControl className={styles.formControl}>
      <Select
        native
        aria-label="Select Countries"
        defaultValue=""
        onChange={(e) => {
          handleCountry(e.target.value);
        }}
      >
        <option value="" aria-label="Select Countries">
          Select Country
        </option>
        {fetchedCountries.map((country, index) => (
          <option
            value={country.name}
            key={index}
            aria-label="picking countries"
          >
            {country.name}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default CountrySelector;
