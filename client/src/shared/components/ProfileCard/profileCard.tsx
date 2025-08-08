import styles from "./profileCard.module.css";
import type {IProfileProps} from '../types'

const ProfileCard: React.FC<IProfileProps> = ({
  fullname,
  photo,
  position,
  department,
}) => {
  return (
    <section className={styles.profileContainer}>
        <img className={styles.photoContainer} src={photo} alt={fullname}></img>
      <div className={styles.profileContent}>
        <h3 className={styles.profileName}>{fullname}</h3>
        <p className={styles.profilePosition}>{position}</p>
        <p className={styles.profileDepart}>{department}</p>
      </div>
      <div className={styles.profileFidback}>
        <img src='team.png' alt='icon'></img>
        <p style={{margin:0}}>Обраная связь</p>
      </div>
    </section>
  );
};
export default ProfileCard;
