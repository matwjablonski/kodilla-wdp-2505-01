import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCompared, removeFromCompare } from '../../../redux/compareRedux';
import styles from './CompareBar.module.scss';
import { getAll } from '../../../redux/productsRedux';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CompareBar = () => {
  const compared = useSelector(getCompared);
  const allProducts = useSelector(getAll);
  const comparedProducts = allProducts.filter(product => 
    compared.includes(product.id)
  );
  const dispatch = useDispatch();

  if (!compared.length) return null;

  return (
    <div className={styles.root}>
      <div className={styles.products}>
        {comparedProducts.map(product => (
          <div key={product.id} className={styles.product}>
            <img src={product.image} alt={product.name} />
            <span
              className={styles.remove}
              onClick={() => dispatch(removeFromCompare(product.id))}
            >
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </div>
        ))}
      </div>
      <button className={styles.compareButton}>Compare</button>
    </div>
  );
};

export default CompareBar;