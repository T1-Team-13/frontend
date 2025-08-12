import { useState } from "react";
import AchivementsEdit from "@/widgets/achivements-edit";
import styles from "./edit-page.module.css";
import { SettingOutlined, CloseOutlined } from "@ant-design/icons";
const EditPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const userName = "Иванов Марк Андреевич";

  return (
    <div>
      <SettingOutlined
        style={{
          opacity: 1,
        }}
        onClick={() => setIsPopupOpen(true)}
        className={styles.settingsIcon}
      />

      {isPopupOpen && (
        <div className={styles.overlay}>
          <div className={styles.popupContainer}>
            <AchivementsEdit userName={userName} />
            <button
              className={styles.closePopupButton}
              onClick={() => setIsPopupOpen(false)}
            >
              <CloseOutlined style={{ opacity: 1 }} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditPage;
