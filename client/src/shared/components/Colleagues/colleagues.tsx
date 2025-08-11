import { Link } from "react-router-dom";
import styles from "./colleagues.module.css";
import Accordion from "../Accordion/accordion";
interface IUser {
  id: number;
  fullname: string;
  position: string;
  photo: string;
}
interface IUsers{
  users:IUser[];
}
const Colleagues: React.FC<IUsers> = ({ users }) => {
  const colleaguesList = users.map((user) => {
    return (
      <Link to="/user" className={styles.collContainer} key={user.id}>
        <img
          className={styles.collPhoto}
          src={user.photo}
          alt={user.fullname}
        ></img>
        <div className={styles.collContent}>
          <h3 className={styles.collName}>{user.fullname}</h3>
          <p className={styles.collPosition}>{user.position}</p>
        </div>
      </Link>
    );
  });

  return (
    <Accordion header={<h3 style={{ fontWeight: 600 }}>Коллеги</h3>}>
      {colleaguesList}
    </Accordion>
  );
};

export default Colleagues;
