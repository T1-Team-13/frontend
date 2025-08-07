import styles from "./section.module.css";
import type { IItem } from "../types";
import SliderAdv from "../SliderAdv";
interface ISectionProps {
  title: string;
  description?: string;
  achievements: IItem[];
}
const Section: React.FC<ISectionProps> = ({
  title,
  description,
  achievements,
}) => {
  return (
    <section className={styles.sectionContainer}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      {description && (
        <p className={styles.sectionDescription}>{description}</p>
      )}
      <div className={styles.sectionSlider}>
        <SliderAdv items={achievements} />
      </div>
    </section>
  );
};
export default Section;
