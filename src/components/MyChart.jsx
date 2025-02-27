import React from "react";
import ReactECharts from "echarts-for-react";

const MyChart = () => {
  // 图表配置
  const options = {
    title: {
      text: "art",
      subtext: "228.8K",
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
          { value: 73700, name: "印度" },
          { value: 49800, name: "美国" },
          { value: 12800, name: "英国" },
          { value: 10400, name: "中国" },
          { value: 6000, name: "澳大利亚" },
          { value: 5800, name: "加拿大" },
          { value: 5000, name: "法国" },
          { value: 3700, name: "德国" },
          { value: 1500, name: "西班牙" },
          { value: 467, name: "土耳其" },
          { value: 441, name: "台湾" },
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
