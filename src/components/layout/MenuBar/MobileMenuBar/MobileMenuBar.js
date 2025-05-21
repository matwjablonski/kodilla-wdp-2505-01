import React, { useState } from 'react';
import ProductSearch from '../../../features/ProductSearch/ProductSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from '../MenuBar.module.scss';

const MobileMenuBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={
        'd-flex align-items-center justify-content-between position-relative ' +
        styles.root
      }
    >
      {menuOpen && (
        <div className={'position-absolute ' + styles.mobileOptionsMenu}>
          <ul className='list-unstyled mb-0 p-2'>
            <li>
              <a href='#'>Home</a>
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
      )}
      <div className='flex-grow-1'>
        <ProductSearch />
      </div>
      <div className='ms-3'>
        <button
          className='btn btn-outline-secondary mx-1'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
  );
};

export default MobileMenuBar;
