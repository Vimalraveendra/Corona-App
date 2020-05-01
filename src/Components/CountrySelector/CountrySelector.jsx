import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
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
  console.log("count", fetchedCountries);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        onChange={e => {
          handleCountry(e.target.value);
        }}
      >
        <option value="global">Global</option>
        {fetchedCountries.map((country, index) => (
          <option value={country.name} key={index}>
            {country.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountrySelector;
