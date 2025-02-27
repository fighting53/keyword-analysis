import React from "react";
import ReactECharts from "echarts-for-react";

const MyChart = () => {
  // 图表配置
  const options = {
    title: {
      text: "gallery",
      subtext: "303.5K",
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
          { value: 65500, name: "印度" },
          { value: 61000, name: "美国" },
          { value: 15900, name: "英国" },
          { value: 9400, name: "中国" },
          { value: 7100, name: "加拿大" },
          { value: 5300, name: "澳大利亚" },
          { value: 1500, name: "德国" },
          { value: 974, name: "法国" },
          { value: 519, name: "土耳其" },
          { value: 346, name: "台湾" },
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
