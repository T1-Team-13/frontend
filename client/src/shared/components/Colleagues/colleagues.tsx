import { Link } from "react-router-dom";
import styles from "./colleagues.module.css";

const Colleagues: React.FC = () => {
  return (
    <section className={styles.colleaguesContainer}>
        <h3 className={styles.colleaguesHeader}>Коллеги</h3>

        <Link to="/colleagues">
            <div className={styles.lineLink}>
              <p className={styles.link}>Посмотреть</p>
              <div className={styles.popupLine}></div>
            </div>
        </Link>
    </section>
  );
};

export default Colleagues;
