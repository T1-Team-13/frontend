import { Flex } from "antd";
import styles from "./menu.module.css";
import { Link } from "react-router-dom";

export const ButtonMenu: React.FC<{ title: string; path: string }> = ({
  title,
  path,
}) => {
  const isActive = window.location.href.includes(path);
  return (
    <Link
      to={path}
      className={`${styles.buttonMenu} ${isActive ? styles.active : ""}`}
    >
      <span>{title}</span>
    </Link>
  );
};

const Menu: React.FC = () => {
  return (
    <div className={styles.menuContainer}>
      <ButtonMenu title="Профиль" path="/" />
      <ButtonMenu title="Активность" path="/activity" />
      <ButtonMenu title="Достижения" path="/achievements" />
    </div>
  );
};
export default Menu;
