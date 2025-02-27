import React from "react";
import ReactECharts from "echarts-for-react";

const MyChart = () => {
  // 图表配置
  const options = {
    title: {
      text: "paintings",
      subtext: "12K",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          { value: 4000, name: "美国" },
          { value: 2800, name: "印度" },
          { value: 1000, name: "英国" },
          { value: 344, name: "中国" },
          { value: 348, name: "澳大利亚" },
          { value: 458, name: "加拿大" },
          { value: 46, name: "法国" },
          { value: 80, name: "德国" },
          { value: 43, name: "西班牙" },
          { value: 10, name: "土耳其" },
          { value: 16, name: "台湾" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return (
    <ReactECharts option={options} style={{ height: "500px", width: "25%" }} />
  );
};

export default MyChart;
