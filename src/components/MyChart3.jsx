import React from "react";
import ReactECharts from "echarts-for-react";

const MyChart = () => {
  // 图表配置
  const options = {
    title: {
      text: "traditional paintings",
      subtext: "1.5K",
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
          { value: 11000, name: "美国" },
          { value: 32, name: "英国" },
          { value: 20, name: "印度" },
          { value: 19, name: "德国" },
          { value: 5, name: "台湾" },
          { value: 5, name: "法国" },
          { value: 2, name: "土耳其" },
          { value: 2, name: "澳大利亚" },
          { value: 1, name: "加拿大" },
          { value: 1, name: "西班牙" },
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
