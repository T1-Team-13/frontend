import { useState } from "react";
import AchivementsEdit from "@/widgets/achivements-edit";
import styles from "./test-page.module.css";

const TestPage = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const userName = 'Иванов Марк Андреевич';
    
    return (
        <div>
            <img 
                src='achEdit.png' 
                alt='logo' 
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
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TestPage;

// Сделал на отедльной странице, т.к. на странице профеля ещё не было шестерёнки, завтра замёржим и прикрутим этот компонент на своё место, а эту страницу удалим