import type { ISliderAdvProps } from "../types";
import styles from "./achievements.module.css";
import { Flex } from "antd";
const Achievements: React.FC<ISliderAdvProps> = ({ items }) => {
  return (
    <section className={styles.sectionCantainer}>
      <h3 className={styles.sectionTitle}>
        Достижения &nbsp; <span>{items.length}</span>
      </h3>
      <Flex align="center" justify="space-between">
        <div>
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
        <button className={styles.button}><img src='arrow.png' alt='arrow'></img></button>
      </Flex>
    </section>
  );
};
export default Achievements;
