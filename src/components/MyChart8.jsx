import React from "react";
import ReactECharts from "echarts-for-react";

const MyChart = () => {
  // 图表配置
  const options = {
    title: {
      text: "drawing",
      subtext: "270.2K",
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
          { value: 97000, name: "美国" },
          { value: 69900, name: "印度" },
          { value: 23300, name: "英国" },
          { value: 9300, name: "加拿大" },
          { value: 7800, name: "澳大利亚" },
          { value: 3500, name: "中国" },
          { value: 1500, name: "德国" },
          { value: 858, name: "法国" },
          { value: 578, name: "西班牙" },
          { value: 289, name: "土耳其" },
          { value: 222, name: "台湾" },
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
