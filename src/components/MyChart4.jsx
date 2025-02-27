import React from "react";
import ReactECharts from "echarts-for-react";

const MyChart = () => {
  // 图表配置
  const options = {
    title: {
      text: "chinese art",
      subtext: "1.5k",
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
          { value: 625, name: "美国" },
          { value: 169, name: "英国" },
          { value: 89, name: "印度" },
          { value: 78, name: "中国" },
          { value: 61, name: "澳大利亚" },
          { value: 54, name: "加拿大" },
          { value: 17, name: "德国" },
          { value: 16, name: "法国" },
          { value: 7, name: "西班牙" },
          { value: 5, name: "台湾" },
          { value: 3, name: "土耳其" },
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
