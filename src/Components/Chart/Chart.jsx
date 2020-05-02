import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api/api";
import styles from "./Chart.module.css";
import { LineChart } from "../LineChart/LineChart";
import { BarChart } from "../BarChart/BarChart";

const Chart = ({ data, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchedDailyData = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchedDailyData();
  }, []);

  return (
    <div className={styles.container}>
      {country ? (
        <BarChart data={data} country={country} />
      ) : (
        <LineChart dailyData={dailyData} />
      )}
    </div>
  );
};

export default Chart;
