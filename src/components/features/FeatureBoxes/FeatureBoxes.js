import React from 'react';
import PropTypes from 'prop-types';

import {
  faTruck,
  faHeadphones,
  faReplyAll,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

import styles from './FeatureBoxes.module.scss';
import FeatureBox from '../../common/FeatureBox/FeatureBox';

const FeatureBoxes = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.freeShippingBoxes}>
        <FeatureBox icon={faTruck}>
          <h5>Free shipping</h5>
          <p>All orders</p>
        </FeatureBox>
        <FeatureBox icon={faHeadphones}>
          <h5>24/7 customer</h5>
          <p>support</p>
        </FeatureBox>
        <FeatureBox icon={faReplyAll}>
          <h5>Money back</h5>
          <p>guarantee</p>
        </FeatureBox>
        <FeatureBox icon={faBullhorn}>
          <h5>Member discount</h5>
          <p>First order</p>
        </FeatureBox>
      </div>
    </div>
  </div>
);

FeatureBoxes.propTypes = {
  children: PropTypes.node,
};

export default FeatureBoxes;
