import React from "react";
import ReactECharts from "echarts-for-react";

const MyChart = () => {
  // 图表配置
  const options = {
    title: {
      text: "painting",
      subtext: "53.8k",
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
          { value: 16300, name: "印度" },
          { value: 11000, name: "美国" },
          { value: 3000, name: "中国" },
          { value: 2700, name: "英国" },
          { value: 1200, name: "加拿大" },
          { value: 960, name: "澳大利亚" },
          { value: 787, name: "德国" },
          { value: 365, name: "法国" },
          { value: 351, name: "西班牙" },
          { value: 132, name: "土耳其" },
          { value: 127, name: "台湾" },
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
