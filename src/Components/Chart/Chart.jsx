import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api/api";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchedDailyData = async () => {
      const dailyData = await fetchDailyData();
      setDailyData(dailyData);
      console.log("response", dailyData);
    };
    fetchedDailyData();
  }, []);
  return (
    <div>
      <h2>Chart </h2>
    </div>
  );
};

export default Chart;
