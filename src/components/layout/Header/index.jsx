import styles from "./styles.module.css";
import { useState } from "react";

/**
 * 导航头部组件
 *
 * @returns 返回导航头部的React组件
 */
const NavigationHeader = () => {
  const buttonList = ["饼状图", "柱状图", "折线图", "环形图", "雷达图"];
  const [buttonIndex, setButtonIndex] = useState(0);
  const [buttonAdd, setButtonAdd] = useState(false);

  //  添加数据按钮的逻辑
  const handleAddData = () => {
    setButtonAdd(!buttonAdd);
    // 如果表单出现，则恢复字体颜色
    // if () {
    // setButtonAdd(false);
    // }
  };

  return (
    <div className={styles.header}>
      <header>
        <div className={styles.charts}>
          {buttonList.map((item, index) => {
            return (
              <button
                key={item}
                onClick={() => setButtonIndex(index)}
                className={buttonIndex === index ? "font-active" : ""}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className={styles.data}>
          <button
            onClick={() => setButtonAdd(!buttonAdd)}
            className={buttonAdd === true ? "font-active" : ""}
          >
            添加数据
          </button>
        </div>
      </header>
    </div>
  );
};

export default NavigationHeader;
