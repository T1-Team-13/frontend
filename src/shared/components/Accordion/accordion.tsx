import React, { useState, useRef, type ReactNode } from 'react';
import styles from './accordion.module.css'

interface IAccordionItem {
  header: ReactNode;
  children: ReactNode;
}

const Accordion:React.FC<IAccordionItem> = ({header, children}) => {
  const [active, setActive] = useState<boolean>(false);
  const bodyRefs =  useRef<HTMLDivElement>(null);

  return (
    <div className={styles.accordion}>
        <div className={styles.accordionItem}>
          <button 
            className={`${styles.accordionHeader} ${active ? 'active' : ''}`}
            onClick={() => {setActive(!active)}}
          >
            {header}
            <div className={styles.lineLink}>
              <p className={styles.link}>{active ? 'Скрыть' : 'Посмотреть'}</p>
              <div className={styles.popupLine}></div>
            </div>
          </button>
          <div 
            className={`${styles.accordionBody} ${active ? 'active' : ''}`}
            ref={bodyRefs}
            style={{
              maxHeight: active 
                ? 'fit-content' 
                : '0'
            }}
          >
           {children}
          </div>
        </div>
    </div>
  );
};

export default Accordion;