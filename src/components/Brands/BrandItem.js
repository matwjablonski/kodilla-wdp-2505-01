import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';

const BrandItem = ({ name, image }) => (
  <div className={styles.brandItem}>
    <img src={image} alt={name} />
  </div>
);

BrandItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default BrandItem;
