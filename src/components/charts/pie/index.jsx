import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import styles from "./styles.module.css";

const Pie = () => {
  // 图表配置数据源
  // 使用 useState 初始化一个 Map 对象
  const [myMap, setMyMap] = useState(new Map());
  const [options, setOptions] = useState([
    {
      title: {
        text: "art",
        subtext: "228.8K",
      },
      data: [
        { value: 73700, name: "印度" },
        { value: 49800, name: "美国" },
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
      ],
    },
  ]);
  const addToMap = () => {
    const newMap = new Map(myMap);
    newMap.set("Google", options);
    newMap.set("Bing", options);
    newMap.set("Yahoo", options);
    newMap.set("Yandex", options);
    setMyMap(newMap);
  };
  useEffect(() => {
    const newPieArr = handleOptions(options);
    setOptions(newPieArr);
    // 在组件挂载后执行一次
    addToMap();
  }, []);

  // 原始数据
  //   const [optionsOri, setOptions] = useState([
  //     {
  //       title: {
  //         text: "art",
  //         subtext: "228.8K",
  //       },
  //       data: [
  //         { value: 73700, name: "印度" },
  //         { value: 49800, name: "美国" },
  //       ],
  //     },
  //   ]);

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
            data: option.data,
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
      {Array.from(myMap.entries()).map(([key, value]) => (
        <div className={styles.pie_item} key={key}>
          <div>
            <h1>{key}</h1>
          </div>
          <div className={styles.pie_item_chart}>
            {value.map((option, index) => {
              return (
                <ReactECharts
                  option={option}
                  key={`${key}-${index}`}
                  style={{ height: "500px", width: "100%" }}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pie;
