import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data: { confirmed, recovered, deaths }, country }) => {
  return (
    <React.Fragment>
      {confirmed ? (
        <Bar
          data={{
            labels: ["Infected", "Recovered", "Deaths"],
            datasets: [
              {
                label: "People",
                backgroundColor: [
                  "rgba( 0,255,0,0.5)",
                  "rgba(0,0,255,0.5)",
                  "rgba(255,0,0,0.5)"
                ],
                data: [confirmed.value, recovered.value, deaths.value]
              }
            ]
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: `Current status in ${country}` }
          }}
        />
      ) : null}
    </React.Fragment>
  );
};
export default BarChart;
