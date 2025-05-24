import React, { useState } from 'react';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import Swipeable from '../../common/Swipeable/Swipeable';

const Homepage = () => {
  const [activePage, setActivePage] = useState(0);

  const leftAction = () => {
    setActivePage(activePage - 1);
  };

  const rightAction = () => {
    setActivePage(activePage + 1);
  };

  return (
    <div className={styles.root}>
      <FeatureBoxes />
      <Swipeable
        leftAction={leftAction}
        rightAction={rightAction}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </div>
  );
};

export default Homepage;
