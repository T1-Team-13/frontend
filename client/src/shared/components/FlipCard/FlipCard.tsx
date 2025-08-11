
import styles from "./flipCard.module.css";
import type { IFlipCardProps } from "../types";

const FlipCard: React.FC<IFlipCardProps> = ({url, title, description}) => {
  return (
    <div className={styles.card}>
      <div className={styles.front}>
        <img src={url} alt='icon'></img>
        <h3>{title}</h3>
      </div>
      <div className={styles.back}>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default FlipCard;
