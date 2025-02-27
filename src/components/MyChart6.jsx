import React from "react";
import ReactECharts from "echarts-for-react";

const MyChart = () => {
  // 图表配置
  const options = {
    title: {
      text: "artist",
      subtext: "31.4K",
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
          { value: 9800, name: "印度" },
          { value: 5900, name: "美国" },
          { value: 4600, name: "中国" },
          { value: 1200, name: "英国" },
          { value: 500, name: "加拿大" },
          { value: 470, name: "澳大利亚" },
          { value: 390, name: "德国" },
          { value: 274, name: "法国" },
          { value: 193, name: "土耳其" },
          { value: 116, name: "西班牙" },
          { value: 64, name: "台湾" },
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
