import React from 'react';
import ProductSearch from '../../../features/ProductSearch/ProductSearch';
import styles from '../MenuBar.module.scss';

const TabletMenuBar = () => (
  <div className='row align-items-center'>
    <div className={'col-auto ' + styles.menu}>
      <ul>
        <li>
          <a href='#' className={styles.active}>
            Home
          </a>
        </li>
        <li>
          <a href='#'>Furniture</a>
        </li>
        <li>
          <a href='#'>Chair</a>
        </li>
        <li>
          <a href='#'>Table</a>
        </li>
        <li>
          <a href='#'>Sofa</a>
        </li>
        <li>
          <a href='#'>Bedroom</a>
        </li>
        <li>
          <a href='#'>Blog</a>
        </li>
      </ul>
    </div>
    <div className='col'>
      <ProductSearch />
    </div>
  </div>
);

export default TabletMenuBar;
