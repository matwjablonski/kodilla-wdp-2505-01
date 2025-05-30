import React from 'react';
import { useSelector } from 'react-redux';
import BrandItem from './BrandItem';
import styles from './Brands.module.scss';

const Brands = () => {
  const brands = useSelector(state => state.brands);

  return (
    <div className='container'>
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <button className={`${styles.arrow} ${styles.left}`}>&#10094;</button>
          <div className={styles.brandsList}>
            {brands.map(brand => (
              <BrandItem key={brand.id} {...brand} />
            ))}
          </div>
          <button className={`${styles.arrow} ${styles.right}`}>&#10095;</button>
        </div>
      </div>
    </div>
  );
};

export default Brands;
