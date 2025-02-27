import React from "react";
import ReactECharts from "echarts-for-react";

const MyChart = () => {
  // 图表配置
  const options = {
    title: {
      text: "paint",
      subtext: "2.2M",
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
          { value: 399100, name: "印度" },
          { value: 186800, name: "美国" },
          { value: 46900, name: "英国" },
          { value: 46400, name: "土耳其" },
          { value: 35300, name: "西班牙" },
          { value: 34000, name: "法国" },
          { value: 31900, name: "德国" },
          { value: 27400, name: "加拿大" },
          { value: 16300, name: "澳大利亚" },
          { value: 12700, name: "中国" },
          { value: 2000, name: "台湾" },
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
