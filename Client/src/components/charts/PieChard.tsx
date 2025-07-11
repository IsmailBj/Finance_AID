/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChartPie = () => {
  const [state, setState] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut" as const,
      },
      labels: ["Apple", "Mango", "Orange", "Watermelon", "Banana"],
    },
  });

  useEffect(() => {
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
  }, []);

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
