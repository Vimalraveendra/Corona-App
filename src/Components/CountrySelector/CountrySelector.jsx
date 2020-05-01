import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountryData } from "../../api/api";
import styles from "./CountrySelector.module.css";

const CountrySelector = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchCountryAPI = async () => {
      setCountries(await fetchCountryData());
    };

    fetchCountryAPI();
  }, []);
  console.log("count", countries);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect>
        <option value="global">Global</option>
        {countries.map((country, index) => (
          <option value="global" key={index}>
            {country.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountrySelector;
