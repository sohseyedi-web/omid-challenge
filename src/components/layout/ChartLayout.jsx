import { useQuery } from "@tanstack/react-query";
import { getChartsData } from "../../services/api";
import ReactECharts from "echarts-for-react";
import moment from "moment";
import { useState, useEffect } from "react";

const ChartLayout = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["charts"],
    queryFn: getChartsData,
    retry: false,
  });

  const [chartData, setChartData] = useState([]);

  const updateData = () => {
    const formattedData = data?.map((item) => ({
      name: moment(item.workoutDay).format("YYYY-MM-DD"),
      value: item.tssActual,
      ctl: item.ctl,
    }));
    setChartData(formattedData);
  };

  useEffect(() => {
    updateData();
  }, []);

  const onPointClick = (params) => {
    if (params.data && params.data.ctl) {
      alert(`CTL: ${params.data.ctl}`);
    }
  };

  const option = {
    xAxis: {
      type: "category",
      data: chartData?.map((item) => item.name),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: chartData?.map((item) => ({
          value: item.value,
          ctl: item.ctl,
        })),
        type: "line",
        emphasis: {
          focus: "series",
          blurScope: "coordinateSystem",
        },
      },
    ],
    tooltip: {
      formatter: (params) => {
        if (params.data && params.data.ctl) {
          return `CTL: ${params.data.ctl}`;
        }
        return "";
      },
    },

    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: false,
        },
        brush: {
          type: ["lineX", "clear"],
        },
        saveAsImage: {
          pixelRatio: 2,
        },
      },
    },
  };

  return (
    <div className="mx-auto max-w-4xl">
      <ReactECharts option={option} />
    </div>
  );
};

export default ChartLayout;
