// import React from "react";
// import { Line } from "react-chartjs-2";

// export const LineChart = ({ dailyData }) =>
//   dailyData.length !== 0 ? (
//     <Line
//       data={{
//         labels: dailyData.map(({ date }) => date),
//         datasets: [
//           {
//             data: dailyData.map(({ confirmed }) => confirmed),
//             label: "Infected",
//             borderColor: "blue",
//             fill: true
//           },
//           {
//             data: dailyData.map(({ deaths }) => deaths),
//             label: "Deaths",
//             borderColor: "red",
//             backgroundColor: "rgba(255,0,0,0.3)",
//             fill: true
//           }
//         ]
//       }}
//     />
//   ) : null;
