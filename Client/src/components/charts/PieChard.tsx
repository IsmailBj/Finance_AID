import { useState, FC } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface ApexChartPieProps {
  labels: Array<string>;
}

const ApexChartPie: FC<ApexChartPieProps> = ({ labels }) => {
  const [state] = useState<{
    series: number[];
    options: ApexOptions;
  }>({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
      },
      labels: labels,
      legend: {
        position: "right",
        offsetY: 0,
        height: 230,
        horizontalAlign: "center",
      },
    },
  });

  return (
    <div id="chart" className="ChartContainer">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
      />
    </div>
  );
};

export default ApexChartPie;
