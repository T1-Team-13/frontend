import React, { useState } from "react";
import styles from "./sliderAdv.module.css";
import type { ISliderAdvProps, ISliderItem } from "../types";


const SliderItem: React.FC<ISliderItem> = ({ item, isActive }) => {
  return (
    <div className={`${styles.itemContainer} ${isActive ? styles.active : ""}`}>
      <img className={styles.itemImage} src={item.url} alt={item.title} />
      <div className={styles.itemTitle}>{item.title}</div>
    </div>
  );
};



const SliderAdv: React.FC<ISliderAdvProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState<"left" | "right">("right");

  const goToPrev = () => {
    setTransitionDirection("left");
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setTransitionDirection("right");
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const getDisplayedIndexes = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    const nextIndex = (currentIndex + 1) % items.length;
    return [prevIndex, currentIndex, nextIndex];
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderContent}>
        {getDisplayedIndexes().map((itemIndex, position) => (
          <div
            key={`${itemIndex}-${position}`}
            className={`${styles.sliderItem} ${
              position === 1
                ? styles.active
                : position === 0
                ? styles.prev
                : styles.next
            } ${transitionDirection === "left" ? styles.leftTransition : styles.rightTransition}`}
            onClick={
              position === 1 ? undefined : position === 0 ? goToPrev : goToNext
            }
          >
            <SliderItem item={items[itemIndex]} isActive={position === 1} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderAdv;