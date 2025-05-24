import React from 'react';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import styles from './Swipeable.module.scss';

const Swipeable = ({ leftAction, rightAction, activePage, setActivePage }) => {
  return (
    <div>
      <NewFurniture activePage={activePage} setActivePage={setActivePage} />
      <div className={styles.buttonsContainer}>
        <button className={styles.pageButton} onClick={leftAction}>
          Previous Page
        </button>
        <button className={styles.pageButton} onClick={rightAction}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Swipeable;
