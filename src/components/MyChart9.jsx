import React from "react";
import ReactECharts from "echarts-for-react";

const MyChart = () => {
  // 图表配置
  const options = {
    title: {
      text: "light painting",
      subtext: "66.4K",
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
          { value: 54200, name: "美国" },
          { value: 6300, name: "英国" },
          { value: 813, name: "法国" },
          { value: 664, name: "印度" },
          { value: 500, name: "加拿大" },
          { value: 491, name: "中国" },
          { value: 190, name: "土耳其" },
          { value: 71, name: "德国" },
          { value: 53, name: "西班牙" },
          { value: 44, name: "澳大利亚" },
          { value: 31, name: "台湾" },
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
