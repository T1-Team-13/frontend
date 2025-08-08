import { Link } from "react-router-dom";
import type { IItem } from "../types";
import styles from './header.module.css'

const Header: React.FC<Omit<IItem, 'title'>> = ({url}) => {
  return (
    <header className={styles.header}>
      <img className={styles.headerLogo} src='T1Logo.png' alt='logo'></img>
      <Link className={styles.headerLink} to='/'>
        <img src={url} alt='profilPh'></img>
      </Link>
    </header>
  );
};
export default Header;
