import { FC } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

// stateless component due to the chart library behave inconsistently

interface ApexChartPieProps {
  labels: string[];
  series: number[];
}

const ApexChartPie: FC<ApexChartPieProps> = ({ labels, series }) => {
  if (!labels || labels.length === 0 || !series || series.length === 0) {
    return <div className="no-data-message">No data available</div>;
  }

  const options: ApexOptions = {
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
  };

  return (
    <div id="chart" className="ChartContainer">
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
  );
};

export default ApexChartPie;
