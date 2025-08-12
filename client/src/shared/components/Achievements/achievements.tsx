import type { ISliderAdvProps } from "../types";
import styles from "./achievements.module.css";
import TestPage from "@/pages/test-page";
const Achievements: React.FC<ISliderAdvProps> = ({ items }) => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>
          Достижения &nbsp; <span>{items.length}</span>
        </h3>
        <TestPage />
        <button className={styles.button}>
          <img src="arrow.png" alt="arrow"></img>
        </button>
      </div>
      <div className={styles.sectionContent}>
        {items.slice(0, 3).map((item, index) => {
          return (
            <img
              className={styles.imgAchiv}
              key={index}
              src={item.url}
              alt={item.title}
            ></img>
          );
        })}
      </div>
    </section>
  );
};
export default Achievements;
