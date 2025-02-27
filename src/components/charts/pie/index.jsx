import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import styles from "./styles.module.css";

const Pie = () => {
  // 原始数据
  const [optionsOri, setOptions] = useState([
    {
      title: {
        text: "art",
        subtext: "228.8K",
      },
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
    },
    {
      title: {
        text: "art",
        subtext: "228.8K",
      },
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
    },
  ]);

  useEffect(() => {
    const newPieArr = handleOptions(optionsOri);
    setOptions(newPieArr);
  }, []);

  // 处理图表配置
  const handleOptions = (options) => {
    return options.map((option, index) => {
      return {
        ...option,
        title: { ...option.title, left: "center" },
        tooltip: { trigger: "item" },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
        series: [
          {
            data: option.data,
            name: "Access From",
            type: "pie",
            radius: "50%",
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
    });
  };

  return (
    <div className={styles.pie}>
      {optionsOri.map((option, index) => {
        return (
          <ReactECharts
            option={option}
            key={index}
            style={{ height: "500px", width: "25%" }}
          />
        );
      })}
    </div>
  );
};

export default Pie;
