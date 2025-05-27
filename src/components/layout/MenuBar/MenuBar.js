import React from 'react';
import PropTypes from 'prop-types';

import styles from './MenuBar.module.scss';
import DesktopMenuBar from './DesktopMenuBar/DesktopMenuBar';
import TabletMenuBar from './TabletMenuBar/TabletMenuBar';
import MobileMenuBar from './MobileMenuBar/MobileMenuBar';

const MenuBar = ({ children }) => {
  const DISPLAY_DESKTOP_CLASSES = 'd-none d-lg-flex';
  const DISPLAY_TABLET_CLASSES = 'd-none d-md-flex d-lg-none';
  const DISPLAY_MOBILE_CLASSES = 'd-flex d-md-none';

  return (
    <div className={styles.root}>
      <div className='container py-2'>
        <div className={DISPLAY_DESKTOP_CLASSES}>
          <DesktopMenuBar />
        </div>
        <div className={DISPLAY_TABLET_CLASSES}>
          <TabletMenuBar />
        </div>
        <div className={DISPLAY_MOBILE_CLASSES}>
          <MobileMenuBar />
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
