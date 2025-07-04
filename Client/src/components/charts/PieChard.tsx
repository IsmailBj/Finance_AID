/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChartPie = () => {
  const [state, setState] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut" as const,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  setState((prevState) => ({
    ...prevState,
    options: {
      ...prevState.options,
      labels: ["Apple", "Mango", "Orange", "Watermelon", "Banana"],
      legend: {
        position: "right",
        offsetY: 80,
        height: 230,
      },
    },
  }));

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
      />
    </div>
  );
};

export default ApexChartPie;
